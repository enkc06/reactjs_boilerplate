import { captureMessage, captureException } from "@sentry/browser";

function log(error) {
  console.error(error);
  // captureMessage("Hello, world2!");
  if (process.env.NODE_ENV === "production") {
    captureException(error);
  }
}

export default {
  log
};
