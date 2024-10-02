import axios from "axios";
const API_KEY = import.meta.env.VITE_NEWSAPI_KEY;

export const getNewsFromNewsAPI = async () => {
  const response = await axios.get(
    `https://newsapi.org/v2/everything?q=tesla&from=2024-09-02&sortBy=publishedAt&apiKey=${API_KEY}`
  );
  return response;
};
