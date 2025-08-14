import { useState, useEffect } from "react";
import { postComment } from "../../../api";

export const AddComment = ({ articleId, setArticleComments }) => {
  const [input, setInput] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newComment = await postComment(articleId, input);
    setArticleComments((prev) => [newComment, ...prev]);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="comment"
        onChange={(event) => setInput(event.target.value)}
        required
      />
      <input type="submit" value="Post" />
    </form>
  );
};
