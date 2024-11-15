// cofig adjusted to skip mandatory env variables

import { randomSecret } from "../src/hooks";

export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', randomSecret('ADMIN_JWT_SECRET'))
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', randomSecret('API_TOKEN_SALT')),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT', randomSecret('TRANSFER_TOKEN_SALT')),
    },
  },
  flags: {
    nps: false,
    promoteEE: false,
  },
});