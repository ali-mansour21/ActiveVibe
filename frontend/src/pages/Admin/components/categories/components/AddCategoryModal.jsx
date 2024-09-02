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
      setImage(reader.result); // Base64 string
    };
    reader.readAsDataURL(file);
  };

  const handleAddClick = () => {
    onAddCategory({ name, imageUrl: image });
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>Add New Category</h3>
        <input
          type="text"
          placeholder="Category Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input type="file" accept="image/*" onChange={handleImageChange} />
        <button onClick={handleAddClick}>Add Category</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default AddCategoryModal;
