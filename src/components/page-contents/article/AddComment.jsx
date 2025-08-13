import { useState, useEffect } from "react";
import { postComment } from "../../../api";

export const AddComment = ({ articleId }) => {
  const [input, setInput] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    await postComment(articleId, input);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="comment"
        onChange={(event) => setInput(event.target.value)}
      />
      <input type="submit" value="Post" />
    </form>
  );
};
