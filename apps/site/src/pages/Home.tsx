function Home() {
  const apiUrl = import.meta.env.VITE_API_URL;
  /* @todo retrieve user data from context and update username instead of login button */
  return (
    <>
      <p>
        <a href={`${apiUrl}/auth/google`}>Login with Google</a>
      </p>
      <p>
        <a href={`${apiUrl}/auth/logout`}>Logout</a>
      </p>
    </>
  );
}

export default Home;
