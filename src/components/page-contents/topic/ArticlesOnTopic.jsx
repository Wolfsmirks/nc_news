import { useState, useEffect } from "react";
import { fetchArticlesByTopic } from "../../../api";
import { ArticleCard } from "../../generic/ArticleCard";

export const ArticlesOnTopic = ({ topic }) => {
  const [articlesOnTopic, setArticlesOnTopic] = useState(null);

  useEffect(() => {
    fetchArticlesByTopic(topic).then((articles) => {
      setArticlesOnTopic(articles);
    });
  }, []);

  if (articlesOnTopic.length === 0)
    return <h2>There are no articles on this topic</h2>;
  if (articlesOnTopic) {
    return (
      <ul>
        {articlesOnTopic.map((article) => (
          <ArticleCard key={article.article_id} article={article} />
        ))}
      </ul>
    );
  }
};
