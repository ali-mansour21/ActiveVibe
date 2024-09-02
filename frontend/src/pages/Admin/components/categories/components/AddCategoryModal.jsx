/* eslint-disable react/prop-types */
import { useState } from "react";
import "../style/add-category-modal.css";
const AddCategoryModal = ({ onClose, onAddCategory }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result); // Convert image to Base64 string
    };
    reader.readAsDataURL(file);
  };

  const handleAddClick = () => {
    if (name && image) {
      onAddCategory({ name, imageUrl: image });
      onClose();
    } else {
      alert("Please provide both a name and an image.");
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3 className="modal-title">Add New Category</h3>
        <input
          type="text"
          placeholder="Category Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input-field"
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="file-input"
        />
        <div className="modal-buttons">
          <button className="add-button" onClick={handleAddClick}>
            Add Category
          </button>
          <button className="cancel-button" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddCategoryModal;
