import { useState } from "react";
import "./styles/index.css";
const initialGuides = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    date_of_birth: "1990-01-01",
    gender: "male",
    expertise: "Hiking",
    bio: "Experienced hiking guide with 10 years of experience.",
    dashboard_username: "john_doe",
  },
  // Add more guides as needed
];
const Index = () => {
  const [guides, setGuides] = useState(initialGuides);
  const [searchEmail, setSearchEmail] = useState("");
  const [searchUsername, setSearchUsername] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentGuide, setCurrentGuide] = useState(null);
  const [showAddGuideModal, setShowAddGuideModal] = useState(false);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newGuide = {
      id: isEditing ? currentGuide.id : guides.length + 1,
      name: formData.get("name"),
      email: formData.get("email"),
      date_of_birth: formData.get("date_of_birth"),
      gender: formData.get("gender"),
      dashboard_username: formData.get("dashboard_username"),
      dashboard_password: formData.get("dashboard_password"),
    };

    if (isEditing) {
      setGuides(
        guides.map((guide) => (guide.id === currentGuide.id ? newGuide : guide))
      );
      setIsEditing(false);
      setCurrentGuide(null);
    } else {
      setGuides([...guides, newGuide]);
    }
    setShowAddGuideModal(false);
  };

  // Handle edit and delete actions
  const handleEditClick = (guide) => {
    setIsEditing(true);
    setCurrentGuide(guide);
    setShowAddGuideModal(true);
  };

  const handleDeleteClick = (id) => {
    setGuides(guides.filter((guide) => guide.id !== id));
  };

  // Filter guides based on search input
  const filteredGuides = guides?.filter(
    (guide) =>
      guide.email.toLowerCase().includes(searchEmail.toLowerCase()) &&
      guide.dashboard_username
        .toLowerCase()
        .includes(searchUsername.toLowerCase())
  );

  return (
    <div className="guide-management">
      <h2>Guide Management</h2>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by Email"
          value={searchEmail}
          onChange={(e) => setSearchEmail(e.target.value)}
          className="search-input"
        />
        <input
          type="text"
          placeholder="Search by Dashboard Username"
          value={searchUsername}
          onChange={(e) => setSearchUsername(e.target.value)}
          className="search-input"
        />
        <button
          className="add-button"
          onClick={() => setShowAddGuideModal(true)}
        >
          Add Guide
        </button>
      </div>

      <table className="guide-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Date of Birth</th>
            <th>Gender</th>
            <th>Dashboard Username</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredGuides.map((guide) => (
            <tr key={guide.id}>
              <td>{guide.name}</td>
              <td>{guide.email}</td>
              <td>{guide.date_of_birth}</td>
              <td>{guide.gender}</td>
              <td>{guide.dashboard_username}</td>
              <td>
                <button
                  className="edit-button"
                  onClick={() => handleEditClick(guide)}
                >
                  Edit
                </button>
                <button
                  className="delete-button"
                  onClick={() => handleDeleteClick(guide.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Add/Edit Guide Modal */}
      {showAddGuideModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>{isEditing ? "Edit Guide" : "Add Guide"}</h3>
            <form onSubmit={handleFormSubmit}>
              <input
                type="text"
                name="name"
                defaultValue={isEditing ? currentGuide.name : ""}
                placeholder="Name"
                required
              />
              <input
                type="email"
                name="email"
                defaultValue={isEditing ? currentGuide.email : ""}
                placeholder="Email"
                required
              />
              <input
                type="date"
                name="date_of_birth"
                defaultValue={isEditing ? currentGuide.date_of_birth : ""}
                placeholder="Date of Birth"
                required
              />
              <select
                name="gender"
                defaultValue={isEditing ? currentGuide.gender : ""}
                required
              >
                <option value="" disabled>
                  Select Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <input
                type="text"
                name="dashboard_username"
                defaultValue={isEditing ? currentGuide.dashboard_username : ""}
                placeholder="Dashboard Username"
                required
              />
              <input
                type="password"
                name="dashboard_password"
                placeholder="Dashboard Password"
                required={!isEditing}
              />
              <button type="submit" className="save-button">
                {isEditing ? "Save Changes" : "Add Guide"}
              </button>
              <button
                onClick={() => setShowAddGuideModal(false)}
                className="cancel-button"
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
