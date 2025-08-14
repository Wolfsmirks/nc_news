import { deleteComment } from "../../../api";

export const BtnDeleteComment = ({ commentId, setArticleComments }) => {
  const handleClick = async () => {
    await deleteComment(commentId);
    setArticleComments((prev) =>
      prev.filter((comment) => comment.comment_id !== commentId)
    );
  };

  return <button onClick={handleClick}>Delete</button>;
};
