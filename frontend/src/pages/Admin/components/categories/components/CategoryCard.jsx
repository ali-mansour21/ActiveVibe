/* eslint-disable react/prop-types */
import { useState } from "react";
import "../style/category-card.css";
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
      <img
        src={category.imageUrl}
        alt={category.name}
        className="category-image"
      />
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedCategory.name}
            onChange={(e) =>
              setEditedCategory({ ...editedCategory, name: e.target.value })
            }
          />
          <button onClick={handleSaveClick}>Save</button>
        </>
      ) : (
        <>
          <h3>{category.name}</h3>
          <button onClick={handleEditClick}>Edit</button>
          <button onClick={() => onDelete(category.id)}>Delete</button>
        </>
      )}
    </div>
  );
};

export default CategoryCard;
