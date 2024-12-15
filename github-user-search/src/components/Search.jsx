import React, { useState } from "react";
import { fetchAdvancedSearch } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setUsers([]);

    const query = {
      username: username.trim(),
      location: location.trim(),
      minRepos: parseInt(minRepos.trim()) || 0,
    };

    try {
      const data = await fetchAdvancedSearch(query);
      setUsers(data.items); // GitHub API returns results in "items"
    } catch (err) {
      setError("No users found. Please refine your search.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Advanced GitHub User Search</h2>

      {/* Search Form */}
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded p-6 space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter GitHub username"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Location</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter location"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Minimum Repositories</label>
          <input
            type="number"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            placeholder="Enter minimum repositories"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-700 focus:outline-none"
        >
          Search
        </button>
      </form>

      {/* Loading State */}
      {loading && <p className="text-center mt-4 text-blue-600">Loading...</p>}

      {/* Error Message */}
      {error && <p className="text-center mt-4 text-red-600">{error}</p>}

      {/* Results */}
      <div className="mt-6">
        {users.length > 0 && (
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {users.map((user) => (
              <li key={user.id} className="p-4 border border-gray-300 rounded-md shadow-md">
                <img
                  src={user.avatar_url}
                  alt={`${user.login}'s avatar`}
                  className="w-16 h-16 rounded-full mx-auto"
                />
                <h3 className="text-lg font-bold text-center mt-2">{user.login}</h3>
                <p className="text-center text-gray-600">{user.location || "N/A"}</p>
                <p className="text-center text-gray-600">Repos: {user.public_repos || 0}</p>
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center text-blue-600 mt-2"
                >
                  View Profile
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Search;
