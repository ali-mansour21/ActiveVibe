import Header from "../../components/Header";
import Categories from "./Categories";
import CuratedEventsBanner from "./CuratedEventsBanner";
import EventsSection from "./EventSection";
import GuideRegistrationBanner from "./GuideRegistrationBanner";
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
      <GuideRegistrationBanner />
    </>
  );
};

export default Home;
