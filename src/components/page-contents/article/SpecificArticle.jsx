import { fetchArticleById } from "../../../api";
import { useState, useEffect } from "react";
import { convertToTimestamp } from "../../../utils";

export const SpecificArticle = ({ id }) => {
  const [article, setArticle] = useState(null);

  useEffect(() => {
    fetchArticleById(id).then(({ article }) => {
      setArticle(article);
    });
  }, []);

  if (article) {
    const {
      title,
      topic,
      author,
      body,
      created_at,
      votes,
      article_img_url,
      comment_count,
    } = article;

    return (
      <article>
        <h2>{title}</h2>
        <p>{topic}</p>
        <p>{author}</p>
        <p>{body}</p>
        <p>{convertToTimestamp(created_at)}</p>
        <p>{votes}</p>
        <p>{comment_count}</p>
        <img src={article_img_url} />
      </article>
    );
  }
};
