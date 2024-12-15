import axios from "axios";

// GitHub API endpoint for fetching user data by username
const API_URL = "https://api.github.com/users/";

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${API_URL}${username}`); // Make GET request to GitHub API
    return response.data; // Return the user data
  } catch (error) {
    throw new Error("User not found"); // If the API call fails, throw an error
  }
};
