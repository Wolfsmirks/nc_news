import { useEffect, useState } from "react";
import { ArticleCard } from "../../generic/ArticleCard";
import { fetchAllArticles } from "../../../api";

export const AllArticles = () => {
  const [allArticles, setAllArticles] = useState(null);
  const [sortBy, setSortBy] = useState(null);
  const [order, setOrder] = useState("asc");

  useEffect(() => {
    fetchAllArticles(sortBy, order).then((articles) => {
      setAllArticles(articles);
    });
  }, [sortBy, order]);

  const toggleOrder = (event) => {
    event.preventDefault();
    if (order === "asc") setOrder("desc");
    if (order === "desc") setOrder("asc");
  };

  if (allArticles) {
    return (
      <section>
        <form>
          <select onChange={(event) => setSortBy(event.target.value)}>
            <option value="created_at">Date</option>
            <option value="votes">Votes</option>
          </select>
        </form>
        <button onClick={toggleOrder}>Order Toggle</button>
        <div className="container">
          <div className="row">
            {allArticles.map((article) => (
              <div className="col" key={article.article_id}>
                <ArticleCard article={article} />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
};
