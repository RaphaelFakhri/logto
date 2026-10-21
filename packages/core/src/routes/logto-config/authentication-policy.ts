import {
  authenticationPolicyGuard,
  resolvedAuthenticationPolicyGuard,
  type AuthenticationPolicy,
  type ResolvedAuthenticationPolicy,
} from '@logto/schemas';

import koaGuard from '#src/middleware/koa-guard.js';

import type { ManagementApiRouter, RouterInitArgs } from '../types.js';

/**
 * Routes for the tenant's authentication policy: what counts as a recent user authentication for
 * Logto-enforced sensitive operations, such as the Account API `identityVerified` check and the
 * RFC 9470 challenge it answers with.
 *
 * The setting is a tenant security policy, not an Account Center setting, so the Account Center
 * reads the same value from `/.well-known/authentication-policy` instead of owning it.
 */
export default function logtoConfigAuthenticationPolicyRoutes<T extends ManagementApiRouter>(
  ...[router, { queries }]: RouterInitArgs<T>
) {
  const { getAuthenticationPolicy, upsertAuthenticationPolicy } = queries.logtoConfigs;

  router.get(
    '/configs/authentication-policy',
    koaGuard({
      response: resolvedAuthenticationPolicyGuard,
      status: [200],
    }),
    async (ctx, next) => {
      ctx.body = await getAuthenticationPolicy();

      return next();
    }
  );

  router.patch(
    '/configs/authentication-policy',
    koaGuard({
      body: authenticationPolicyGuard,
      response: resolvedAuthenticationPolicyGuard,
      status: [200],
    }),
    async (ctx, next) => {
      const current = await getAuthenticationPolicy();
      const updated: AuthenticationPolicy = { ...current, ...ctx.guard.body };

      await upsertAuthenticationPolicy(updated);
      const policy: ResolvedAuthenticationPolicy = await getAuthenticationPolicy();
      ctx.body = policy;

      return next();
    }
  );
}
