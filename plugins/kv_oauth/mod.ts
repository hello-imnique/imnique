import type { Plugin } from "$fresh/server.ts";
import { createGitHubOAuthConfig, createHelpers } from "jsr:@deno/kv-oauth";
import { LOCALHOST_PORT } from "../../const.ts";

const { signIn, handleCallback, signOut, getSessionId } = createHelpers(
  createGitHubOAuthConfig(),
);

export default {
  name: "kv-oauth",
  routes: [
    {
      path: "/api/auth/github-signin",
      async handler(req) {
        const urlParams = {} as { redirect_uri?: string };
        const redirect_uri = !Deno.env.has("DENO_DEPLOYMENT_ID") &&
          `http://localhost:${LOCALHOST_PORT}/api/auth/github-callback`;

        if (redirect_uri) {
          urlParams.redirect_uri = redirect_uri;
        }

        return await signIn(req, {
          urlParams,
        });
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
