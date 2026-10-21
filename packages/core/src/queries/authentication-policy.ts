import {
  LogtoConfigs,
  LogtoTenantConfigKey,
  type AuthenticationPolicy,
  authenticationPolicyGuard,
  type ResolvedAuthenticationPolicy,
  defaultMaximumAuthenticationAgeInSeconds,
} from '@logto/schemas';
import { sql, type CommonQueryMethods } from '@silverhand/slonik';

import { type WellKnownCache } from '#src/caches/well-known.js';
import { convertToIdentifiers } from '#src/utils/sql.js';

const { table, fields } = convertToIdentifiers(LogtoConfigs);

/**
 * The tenant's authentication policy, kept apart from the other tenant configurations because it
 * is enforced on every sensitive request rather than read by a management route.
 */
export const createAuthenticationPolicyQueries = (
  pool: CommonQueryMethods,
  wellKnownCache: WellKnownCache
) => {
  /**
   * Resolve the policy for the callers that enforce it on every request: the Account API policy
   * and its RFC 9470 challenge. Memoized in the well-known cache, which the upsert invalidates, so
   * a saved setting applies to the next request.
   */
  const getAuthenticationPolicy = wellKnownCache.memoize(async (): Promise<
    Readonly<ResolvedAuthenticationPolicy>
  > => {
    const { rows } = await pool.query<{ value: unknown }>(sql`
      select ${fields.value} from ${table}
      where ${fields.key} = ${LogtoTenantConfigKey.AuthenticationPolicy}
    `);
    const stored = rows.length === 0 ? {} : authenticationPolicyGuard.parse(rows[0]?.value);

    return {
      maximumAuthenticationAgeInSeconds:
        stored.maximumAuthenticationAgeInSeconds ?? defaultMaximumAuthenticationAgeInSeconds,
    };
  }, ['authentication-policy']);

  const upsertAuthenticationPolicy = wellKnownCache.mutate(
    async (value: AuthenticationPolicy) =>
      pool.query(sql`
        insert into ${table} (${fields.key}, ${fields.value})
          values (${LogtoTenantConfigKey.AuthenticationPolicy}, ${sql.jsonb(value)})
          on conflict (${fields.tenantId}, ${fields.key}) do update
          set ${fields.value} = ${sql.jsonb(value)}
      `),
    ['authentication-policy']
  );

  return { getAuthenticationPolicy, upsertAuthenticationPolicy };
};
