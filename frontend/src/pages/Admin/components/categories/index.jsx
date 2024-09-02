import { useState } from "react";
import "./style/category-page.css";
import AddCategoryModal from "./components/AddCategoryModal";
import CategoryCard from "./components/CategoryCard";
const Index = () => {
  const [categories, setCategories] = useState([
    { id: 1, name: "Technology", imageUrl: "sample-image-url" },
    { id: 2, name: "Art", imageUrl: "sample-image-url" },
  ]);

  const [showModal, setShowModal] = useState(false);

  // Add a new category to the list
  const handleAddCategory = (newCategory) => {
    setCategories([
      ...categories,
      { ...newCategory, id: categories.length + 1 },
    ]);
  };

  // Edit an existing category
  const handleEditCategory = (updatedCategory) => {
    setCategories(
      categories.map((category) =>
        category.id === updatedCategory.id ? updatedCategory : category
      )
    );
  };

  // Delete a category
  const handleDeleteCategory = (id) => {
    setCategories(categories.filter((category) => category.id !== id));
  };

  return (
    <div className="category-page">
      <div className="category-header">
        <h2>Categories</h2>
        <button
          className="add-category-button"
          onClick={() => setShowModal(true)}
        >
          Add Category
        </button>
      </div>
      <div className="categories-grid">
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            category={category}
            onEdit={handleEditCategory}
            onDelete={handleDeleteCategory}
          />
        ))}
      </div>

      {showModal && (
        <AddCategoryModal
          onClose={() => setShowModal(false)}
          onAddCategory={handleAddCategory}
        />
      )}
    </div>
  );
};

export default Index;
