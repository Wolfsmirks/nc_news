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
    <div className="container">
      <article className="card" style={{ width: 15 + "vw" }}>
        <img src={article_img_url} className="card-img-top" />
        <div className="card-body">
          <Link to={`/articles/${article_id}`}>
            <p className="card-title">{title}</p>
          </Link>
          <Link to={`/topics/${topic}`}>
            <p className="card-subtitle">{topic}</p>
          </Link>
          <p>{author}</p>
          <p>{convertToTimestamp(created_at)}</p>
          <p>Votes: {votes}</p>
          <p>Comment Count: {comment_count}</p>
        </div>
      </article>
    </div>
  );
};
