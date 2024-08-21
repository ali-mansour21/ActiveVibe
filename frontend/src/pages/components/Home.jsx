import Header from "../../components/Header";
import Categories from "./Categories";
import EventsSection from "./EventSection";
import LandingPage from "./LandingPage ";

const Home = () => {
  const isAuthenticated = false;
  return (
    <>
      <Header isAuthenticated={isAuthenticated} />
      <LandingPage />
      <Categories />
      <EventsSection />
    </>
  );
};

export default Home;
