// Validate environment variables immediately on startup. Throws an error if any required variables are missing.
const hookDiscord = import.meta.env.HOOK_DISCORD;

if (!hookDiscord) {
  throw new Error(
    "CRITICAL: Environment variable 'HOOK_DISCORD' is not defined in your .env file. App startup aborted."
  );
}

export const env = {
  HOOK_DISCORD: hookDiscord,
};
