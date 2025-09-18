import * as Sentry from '@sentry/node'
import 'dotenv/config'

Sentry.init({
  // debug: true,
  environment: process.env.NODE_ENV,
  dsn: process.env.SENTRY_DSN,
  tracesSampleRate: 1.0,
  sendDefaultPii: true,
})
