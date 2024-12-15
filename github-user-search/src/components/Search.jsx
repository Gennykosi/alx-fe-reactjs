import React, { useState } from "react";
import { fetchUserData } from "../services/githubService"; // Import the fetchUserData function

const Search = () => {
  const [username, setUsername] = useState(""); // State for the username input
  const [user, setUser] = useState(null); // State for the fetched user data
  const [error, setError] = useState(null); // State for error messages
  const [loading, setLoading] = useState(false); // State for loading status

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form default behavior (page reload)
    
    if (username.trim() === "") {
      alert("Please enter a GitHub username.");
      return;
    }

    setLoading(true);
    setError(null);
    setUser(null);

    try {
      const data = await fetchUserData(username); // Fetch user data using the API
      setUser(data); // Set user data to state
    } catch (err) {
      setError("Looks like we can't find the user."); // Set error state if user is not found
    } finally {
      setLoading(false); // Stop loading after API call finishes
    }
  };

  return (
    <div>
      <h2>Search GitHub Users</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)} // Update username state on input change
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>} {/* Display loading state */}

      {error && <p style={{ color: "red" }}>{error}</p>} {/* Display error message */}

      {user && (
        <div style={{ marginTop: "20px" }}>
          <h3>{user.name || user.login}</h3> {/* Display user name or login */}
          <img
            src={user.avatar_url}
            alt={`${user.login}'s avatar`}
            style={{ width: "100px", borderRadius: "50%" }}
          />
          <p>
            <a href={user.html_url} target="_blank" rel="noopener noreferrer">
              View Profile
            </a>
          </p>
        </div>
      )}
    </div>
  );
};

export default Search;
