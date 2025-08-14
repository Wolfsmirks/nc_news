import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchArticleById } from "../../../api";
import { convertToTimestamp } from "../../../utils";
import { VoteButton } from "../../generic/VoteButton";

export const SpecificArticle = ({ articleId }) => {
  const [article, setArticle] = useState(null);
  const [error, setError] = useState(null);
  console.log(error);

  useEffect(() => {
    fetchArticleById(articleId)
      .then(({ article }) => {
        setArticle(article);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  const handleVote = (vote) => {
    setArticle((prev) => ({ ...prev, votes: prev.votes + vote }));
  };

  if (error)
    return (
      <>
        <h2>{error.message}</h2>
      </>
    );

  if (article) {
    const {
      title,
      topic,
      author,
      created_at,
      body,
      votes,
      comment_count,
      article_img_url,
    } = article;

    return (
      <article>
        <h2>{title}</h2>
        <Link to={`/topics/${topic}`}>
          <p>{topic}</p>
        </Link>
        <p>{topic}</p>
        <p>{author}</p>
        <p>{convertToTimestamp(created_at)}</p>
        <p>{body}</p>
        <p>Votes: {votes}</p>
        <VoteButton articleId={articleId} handleVote={handleVote} />
        <p>Comment Count: {comment_count}</p>
        <img src={article_img_url} />
      </article>
    );
  }
};
