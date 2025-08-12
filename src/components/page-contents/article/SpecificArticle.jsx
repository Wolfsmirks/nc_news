import { useState, useEffect } from "react";
import { fetchArticleById } from "../../../api";
import { convertToTimestamp } from "../../../utils";
import { VoteButton } from "../../generic/VoteButton";

export const SpecificArticle = ({ id }) => {
  const [article, setArticle] = useState(null);

  useEffect(() => {
    fetchArticleById(id).then(({ article }) => {
      setArticle(article);
    });
  }, []);

  const handleVote = (vote) => {
    setArticle((prev) => ({ ...prev, votes: prev.votes + vote }));
  };

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
        <p>{topic}</p>
        <p>{author}</p>
        <p>{convertToTimestamp(created_at)}</p>
        <p>{body}</p>
        <p>Votes: {votes}</p>
        <VoteButton id={id} handleVote={handleVote} />
        <p>Comment Count: {comment_count}</p>
        <img src={article_img_url} />
      </article>
    );
  }
};
