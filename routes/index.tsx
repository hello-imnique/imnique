const signInEndpoint = "/api/auth/github-signin";

export default function Home() {
  return (
    <a href={signInEndpoint}>
      Sign In with GitHub
    </a>
  );
}
