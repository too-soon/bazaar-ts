function Home() {
  const apiUrl = import.meta.env.VITE_API_URL;
  return (
    <>
      <p>
        <a href={`${apiUrl}/auth/google`}>Login with Google</a>
      </p>
    </>
  );
}

export default Home;
