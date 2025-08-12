import { useEffect, useState } from "react";
import { ArticleCard } from "../../generic/ArticleCard";
import { fetchAllArticles } from "../../../api";

export const AllArticles = () => {
  const [allArticles, setAllArticles] = useState(null);

  useEffect(() => {
    fetchAllArticles().then((articles) => setAllArticles(articles));
  }, []);

  if (allArticles) {
    return (
      <section>
        <ul>
          {allArticles.map((article) => (
            <ArticleCard key={article.article_id} article={article} />
          ))}
        </ul>
      </section>
    );
  }
};
