import { useState, useEffect } from "react";
import { convertToTimestamp } from "../../../utils";
import { fetchCommentsByArticle } from "../../../api";
import { AddComment } from "./AddComment";
import { BtnDeleteComment } from "./BtnDeleteComment";

export const ArticleComments = ({ articleId }) => {
  const [articleComments, setArticleComments] = useState(null);

  useEffect(() => {
    fetchCommentsByArticle(articleId).then(({ comments }) => {
      setArticleComments(comments);
    });
  }, [articleComments]);

  if (articleComments) {
    return (
      <>
        <AddComment articleId={articleId} />
        <ul>
          {articleComments.map(
            ({ comment_id, body, votes, author, created_at }) => (
              <article key={comment_id}>
                <h2>{author}</h2>
                <p>{body}</p>
                <p>{votes}</p>
                <p>{convertToTimestamp(created_at)}</p>
                <p>COMMENT ID: {comment_id}</p>
                {author === "grumpy19" && (
                  <BtnDeleteComment commentId={comment_id} />
                )}
              </article>
            )
          )}
        </ul>
      </>
    );
  }
};
