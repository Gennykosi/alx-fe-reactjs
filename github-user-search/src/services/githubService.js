import axios from "axios";

const API_BASE_URL = "https://api.github.com";

export const fetchAdvancedSearch = async ({ username, location, minRepos }) => {
  let query = "";

  if (username) query += `${username}+`;
  if (location) query += `location:${location}+`;
  if (minRepos) query += `repos:>=${minRepos}`;

  const response = await axios.get(`${API_BASE_URL}/search/users`, {
    params: { q: query },
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_GITHUB_API_KEY}`,
    },
  });

  return response.data;
};
