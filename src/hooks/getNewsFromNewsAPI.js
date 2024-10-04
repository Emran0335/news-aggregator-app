import axios from "axios";
const API_KEY = import.meta.env.VITE_NEWSAPI_KEY;

export const getNewsFromNewsAPI = async () => {
  const response = await axios.get(
    `https://newsapi.org/v2/everything?q=apple&from=2024-10-02&to=2024-10-02&sortBy=popularity&apiKey=${API_KEY}`
  );
  return response;
};
