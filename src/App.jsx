import { useEffect, useState } from "react";
import "./App.css";
import { getNewsFromNewsAPI } from "./hooks/getNewsFromNewsAPI";

function App() {
  const [articles, setArticles] = useState([]);
  console.log("articles", articles);

  useEffect(() => {
    getNewsFromNewsAPI()
      .then((res) => setArticles(res?.data?.articles))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div>
      {articles.map((news) => (
        <ul key={news.title}>
          <li>{news.title}</li>
        </ul>
      ))}
    </div>
  );
}

export default App;
