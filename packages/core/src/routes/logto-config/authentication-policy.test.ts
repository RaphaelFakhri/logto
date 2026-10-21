import {
  defaultMaximumAuthenticationAgeInSeconds,
  type ResolvedAuthenticationPolicy,
} from '@logto/schemas';
import { pickDefault } from '@logto/shared/esm';

import { MockTenant } from '#src/test-utils/tenant.js';
import { createRequester } from '#src/utils/test-utils.js';

const { jest } = import.meta;

const defaultPolicy: ResolvedAuthenticationPolicy = {
  maximumAuthenticationAgeInSeconds: defaultMaximumAuthenticationAgeInSeconds,
};

const logtoConfigQueries = {
  getAuthenticationPolicy: jest.fn(async (): Promise<Readonly<ResolvedAuthenticationPolicy>> => {
    return defaultPolicy;
  }),
  upsertAuthenticationPolicy: jest.fn(),
};

const settingRoutes = await pickDefault(import('./index.js'));

describe('authentication policy routes', () => {
  const tenantContext = new MockTenant(undefined, { logtoConfigs: logtoConfigQueries });

  const routeRequester = createRequester({
    authedRoutes: settingRoutes,
    tenantContext,
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('GET /configs/authentication-policy', () => {
    it('returns the resolved policy, including the default window', async () => {
      const response = await routeRequester.get('/configs/authentication-policy');

      expect(response.status).toEqual(200);
      expect(response.body).toEqual(defaultPolicy);
    });

    it('returns the configured window', async () => {
      logtoConfigQueries.getAuthenticationPolicy.mockResolvedValueOnce({
        maximumAuthenticationAgeInSeconds: 7200,
      });

      const response = await routeRequester.get('/configs/authentication-policy');

      expect(response.status).toEqual(200);
      expect(response.body).toEqual({ maximumAuthenticationAgeInSeconds: 7200 });
    });
  });

  describe('PATCH /configs/authentication-policy', () => {
    it('merges the patch onto the current policy and upserts the whole object', async () => {
      logtoConfigQueries.getAuthenticationPolicy
        .mockResolvedValueOnce(defaultPolicy)
        .mockResolvedValueOnce({ maximumAuthenticationAgeInSeconds: 7200 });

      const response = await routeRequester
        .patch('/configs/authentication-policy')
        .send({ maximumAuthenticationAgeInSeconds: 7200 });

      expect(response.status).toEqual(200);
      expect(logtoConfigQueries.upsertAuthenticationPolicy).toHaveBeenCalledWith({
        maximumAuthenticationAgeInSeconds: 7200,
      });
      expect(response.body).toEqual({ maximumAuthenticationAgeInSeconds: 7200 });
    });

    it.each([60, 7200])(
      'accepts the boundary value %p',
      async (maximumAuthenticationAgeInSeconds) => {
        logtoConfigQueries.getAuthenticationPolicy.mockResolvedValueOnce(defaultPolicy);

        const response = await routeRequester
          .patch('/configs/authentication-policy')
          .send({ maximumAuthenticationAgeInSeconds });

        expect(response.status).toEqual(200);
        expect(logtoConfigQueries.upsertAuthenticationPolicy).toHaveBeenCalledWith({
          maximumAuthenticationAgeInSeconds,
        });
      }
    );

    it.each([
      ['below the minimum', 59],
      ['above the maximum', 7201],
      ['fractional', 90.5],
      ['not a number', '600'],
    ])('rejects a value %s', async (_, maximumAuthenticationAgeInSeconds) => {
      const response = await routeRequester
        .patch('/configs/authentication-policy')
        .send({ maximumAuthenticationAgeInSeconds });

      expect(response.status).toEqual(400);
      expect(logtoConfigQueries.upsertAuthenticationPolicy).not.toHaveBeenCalled();
    });
  });
});
