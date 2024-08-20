import Header from "../../components/Header";

const Home = () => {
  const isAuthenticated = false;
  return (
    <>
      <Header isAuthenticated={isAuthenticated} />
      <div>
        <h2>Welcome to Eventify!</h2>
      </div>
    </>
  );
};

export default Home;
