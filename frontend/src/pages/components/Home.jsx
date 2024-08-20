import Header from "../../components/Header";
import LandingPage from "./LandingPage ";

const Home = () => {
  const isAuthenticated = false;
  return (
    <>
      <Header isAuthenticated={isAuthenticated} />
      <LandingPage />
    </>
  );
};

export default Home;
