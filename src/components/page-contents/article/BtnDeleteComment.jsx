import { deleteComment } from "../../../api";

export const BtnDeleteComment = ({ commentId }) => {
  const handleClick = async () => {
    await deleteComment(commentId);
  };

  return <button onClick={handleClick}>Delete</button>;
};
