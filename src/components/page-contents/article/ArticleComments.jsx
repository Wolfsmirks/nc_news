import { useState, useEffect } from "react";
import { convertToTimestamp } from "../../../utils";
import { fetchCommentsByArticle } from "../../../api";

export const ArticleComments = ({ id }) => {
  const [comments, setComments] = useState(null);

  useEffect(() => {
    fetchCommentsByArticle(id).then(({ comments }) => {
      setComments(comments);
    });
  }, []);

  if (comments) {
    return (
      <ul>
        {comments.map(({ comment_id, body, votes, author, created_at }) => (
          <article key={comment_id}>
            <h2>{author}</h2>
            <p>{body}</p>
            <p>{votes}</p>
            <p>{convertToTimestamp(created_at)}</p>
          </article>
        ))}
      </ul>
    );
  }
};
