import Header from "../../../components/Header";
import SearchBar from "../../../components/SearchBar";

const Home = () => {
  const isAuthenticated = false;

  return (
    <div>
      <Header isAuthenticated={isAuthenticated} />
      <SearchBar />
    </div>
  );
};

export default Home;
