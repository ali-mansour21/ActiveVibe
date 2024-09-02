/* eslint-disable react/prop-types */
import { useState } from "react";
import "../style/category-card.css";
import logo from "../../../../../assets/landing/Hero.png";
const CategoryCard = ({ category, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedCategory, setEditedCategory] = useState(category);

  const handleEditClick = () => setIsEditing(true);

  const handleSaveClick = () => {
    onEdit(editedCategory);
    setIsEditing(false);
  };

  return (
    <div className="category-card">
      <div className="category-image-wrapper">
        <img srcSet={logo} alt={category.name} className="category-image" />
      </div>
      <div className="category-info">
        {isEditing ? (
          <>
            <input
              type="text"
              value={editedCategory.name}
              onChange={(e) =>
                setEditedCategory({ ...editedCategory, name: e.target.value })
              }
              className="edit-input"
            />
            <button className="save-button" onClick={handleSaveClick}>
              Save
            </button>
          </>
        ) : (
          <>
            <h3>{category.name}</h3>
            <button className="edit-button" onClick={handleEditClick}>
              Edit
            </button>
            <button
              className="delete-button"
              onClick={() => onDelete(category.id)}
            >
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default CategoryCard;
