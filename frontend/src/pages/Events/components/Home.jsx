import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import SearchBar from "../../../components/SearchBar";
import EventListing from "./EventListing";

const Home = () => {
  const isAuthenticated = false;

  return (
    <div>
      <Header isAuthenticated={isAuthenticated} />
      <SearchBar />
      <EventListing />
      <Footer />
    </div>
  );
};

export default Home;
