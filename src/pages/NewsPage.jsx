import React from "react";
import { Link } from "react-router-dom";

function NewsPage({ articles }) {
  console.log(articles);
  return (
    <div>
      {articles.map((article) => (
        <ul key={article.title}>
          <h1>{article.title}</h1>
          <a href="">{article.url}</a>
        </ul>
      ))}
    </div>
  );
}

export default NewsPage;
