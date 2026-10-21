import type { ResolvedAuthenticationPolicy } from '@logto/schemas';
import ky from 'ky';

/**
 * The tenant's authentication policy, which decides how recent a sign-in must be for Logto-enforced
 * sensitive operations. Account Center reads it from the public configuration so its proactive
 * step-up uses the same window as the Account API.
 */
export const getAuthenticationPolicy = async (): Promise<ResolvedAuthenticationPolicy> =>
  ky.get('/api/.well-known/authentication-policy').json<ResolvedAuthenticationPolicy>();
