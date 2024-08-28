import logo from "../../../assets/landing/Hero.png";
import "../styles/categories.css";
import Carousel from "./Carousel";
const categories = [
  { name: "Entertainment", imageUrl: logo },
  { name: "Educational & Business", imageUrl: logo },
  { name: "Cultural & Arts", imageUrl: logo },
  { name: "Sports & Fitness", imageUrl: logo },
  {
    name: "Technology & Innovation",
    imageUrl: logo,
  },
  { name: "Travel & Adventure", imageUrl: logo },
  { name: "Travel & Adventure", imageUrl: logo },
  { name: "Travel & Adventure", imageUrl: logo },
  { name: "Travel & Adventure", imageUrl: logo },
  { name: "Travel & Adventure", imageUrl: logo },
  { name: "Travel & Adventure", imageUrl: logo },
  { name: "Travel & Adventure", imageUrl: logo },
  { name: "Travel & Adventure", imageUrl: logo },
];
const Categories = () => {
  return (
    <div className="categories-container">
      <h2>Explore Categories</h2>
      <Carousel items={categories} itemsPerSlide={7} />
    </div>
  );
};

export default Categories;
