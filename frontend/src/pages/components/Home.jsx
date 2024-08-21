import Header from "../../components/Header";
import Categories from "./Categories";
import LandingPage from "./LandingPage ";

const Home = () => {
  const isAuthenticated = false;
  return (
    <>
      <Header isAuthenticated={isAuthenticated} />
      <LandingPage />
      <Categories />
    </>
  );
};

export default Home;
