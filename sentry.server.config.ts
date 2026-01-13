// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://354e50546e63cb9ec85605bb8a9ff53e@o4510702171389952.ingest.us.sentry.io/4510702177943552",

  // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
  tracesSampleRate: 1,

  // Enable logs to be sent to Sentry
  enableLogs: true,

  // Enable sending user PII (Personally Identifiable Information)
  // https://docs.sentry.io/platforms/javascript/guides/nextjs/configuration/options/#sendDefaultPii
  sendDefaultPii: true,
  integrations: [Sentry.vercelAIIntegration,
    // send console.log, console.warn, and console.errror calls as log to Sentry
    Sentry.consoleIntegration({ levels: ["log", "warn", "error"] }),
  ]
});
