import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const searchGithubUsers = async (query) => {
  const response = await axios.get(`${API_BASE_URL}/search/users`, {
    params: { q: query },
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_GITHUB_API_KEY}`,
    },
  });
  return response.data;
};
