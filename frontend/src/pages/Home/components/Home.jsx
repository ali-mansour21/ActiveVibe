import Header from "../../../components/Header";
import Categories from "./Categories";
import CuratedEventsBanner from "./CuratedEventsBanner";
import EventsSection from "./EventSection";
import Footer from "../../../components/Footer";
import GuideRegistrationBanner from "./GuideRegistrationBanner";
import LandingPage from "./LandingPage ";
import NewsletterSubscription from "./NewsletterSubscription ";
import OnlineEventsSection from "./OnlineEventsSection";

const Home = () => {
  const isAuthenticated = false;
  return (
    <>
      <Header isAuthenticated={isAuthenticated} />
      <LandingPage />
      <Categories />
      <EventsSection />
      <CuratedEventsBanner />
      <OnlineEventsSection />
      <GuideRegistrationBanner />
      <NewsletterSubscription />
      <Footer />
    </>
  );
};

export default Home;
