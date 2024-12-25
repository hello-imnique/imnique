import type { Plugin } from "$fresh/server.ts";
import { createGitHubOAuthConfig, createHelpers } from "jsr:@deno/kv-oauth";

const { signIn, handleCallback, signOut, getSessionId } = createHelpers(
  createGitHubOAuthConfig(),
);

export default {
  name: "kv-oauth",
  routes: [
    {
      path: "/api/auth/github-signin",
      async handler(req) {
        return await signIn(req);
      },
    },
    {
      path: "/api/auth/github-callback",
      async handler(req) {
        // Return object also includes `accessToken` and `sessionId` properties.
        const { response } = await handleCallback(req);
        return response;
      },
    },
    {
      path: "/api/auth/github-signout",
      async handler(req) {
        return await signOut(req);
      },
    },
  ],
} as Plugin;

export const getSessionId_github = getSessionId;
