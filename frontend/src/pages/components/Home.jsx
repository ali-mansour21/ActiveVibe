import Header from "../../components/Header";
import Categories from "./Categories";
import CuratedEventsBanner from "./CuratedEventsBanner";
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
      <CuratedEventsBanner />
    </>
  );
};

export default Home;
