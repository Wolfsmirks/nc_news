import "./generic.css";
import { convertToTimestamp } from "../../utils";
import { Link } from "react-router-dom";

export const ArticleCard = ({
  article: {
    article_id,
    title,
    topic,
    author,
    created_at,
    votes,
    article_img_url,
    comment_count,
  },
}) => {
  return (
    <article className="article-card">
      <Link to={`/articles/${article_id}`}>
        <h2>{title}</h2>
      </Link>
      <p>{topic}</p>
      <p>{author}</p>
      <p>{convertToTimestamp(created_at)}</p>
      <p>{votes}</p>
      <p>{comment_count}</p>
      <img src={article_img_url} />
    </article>
  );
};
