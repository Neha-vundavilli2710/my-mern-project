import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import API from "../../services/api";

import "./Admin.css";

function Admin() {

  const navigate = useNavigate();

  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    loadSuggestions();
  }, []);

  const loadSuggestions = async () => {
    try {
      const res = await API.get("/suggestions/all");
      if (res.data.success) {
        setSuggestions(res.data.suggestions);
      }
    } catch (error) {
      alert(error.response?.data?.message || "Access denied.");
      navigate("/dashboard");
    }
  };

  const handleDelete = async (id) => {
    try {
      await API.delete(`/suggestions/${id}`);
      setSuggestions(suggestions.filter((s) => s._id !== id));
    } catch (error) {
      alert("Could not delete suggestion.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="admin-page">
      <div className="admin-panel">
        <button className="admin-logout" onClick={handleLogout}>
          Logout
        </button>

        <h1>Admin Panel - User Suggestions</h1>

        <table className="admin-table">
          <thead>
            <tr>
              <th>Email</th>
              <th>Age</th>
              <th>Height (cm)</th>
              <th>Weight (kg)</th>
              <th>BMI</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {suggestions.map((s) => (
              <tr key={s._id}>
                <td>{s.userId?.email || "—"}</td>
                <td>{s.age}</td>
                <td>{s.height}</td>
                <td>{s.weight}</td>
                <td>{s.bmi}</td>
                <td>
                  <button className="delete-btn" onClick={() => handleDelete(s._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Admin;