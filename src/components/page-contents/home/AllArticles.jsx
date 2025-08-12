import { useEffect, useState } from "react";
import { ArticleCard } from "../../generic/ArticleCard";

export const AllArticles = () => {
  const [allArticles, setAllArticles] = useState(null);

  useEffect(() => {
    const fetchAllArticles = async () => {
      const res = await fetch(
        "https://northcoders-news-4vbk.onrender.com/api/articles?limit=10&page=1"
      );
      const { articles } = await res.json();
      setAllArticles(articles);
    };
    fetchAllArticles();
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
