import { randomSecret } from "../src/hooks"
import tasks from "../src/functions/cron"

export default ({ env }) => ({
  host: env('HOST', '127.0.0.1'),
  port: env('PORT', 1337),
  app: {
    keys: env.array("APP_KEYS", [randomSecret("APP_KEYS")]),
  },
  cron: {
    enabled: Object.entries(tasks).length > 0,
    tasks,
  },
  url: env('ABSOLUTE_URL', 'http://localhost:1337'),
  proxy: true,
});