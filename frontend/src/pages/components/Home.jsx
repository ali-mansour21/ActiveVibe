import Header from "../../components/Header";
import Categories from "./Categories";
import EventsSection from "./EventSection";
import LandingPage from "./LandingPage ";
import OnlineEventsSection from "./OnlineEventsSection";

const Home = () => {
  const isAuthenticated = false;
  return (
    <>
      <Header isAuthenticated={isAuthenticated} />
      <LandingPage />
      <Categories />
      <EventsSection />
      <OnlineEventsSection />
    </>
  );
};

export default Home;
