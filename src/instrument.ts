import * as Sentry from '@sentry/node'
import 'dotenv/config'

Sentry.init({
  // debug: true,
  environment: process.env.NODE_ENV,
  dsn: process.env.SENTRY_DSN,
  ignoreErrors: ['AbortError'],
  // Send structured logs to Sentry
  enableLogs: true,
  // Tracing
  tracesSampleRate: 1.0, //  Capture 100% of the transactions
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true,
})
