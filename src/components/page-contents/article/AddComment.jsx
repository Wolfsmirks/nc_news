import { useState, useEffect } from "react";
import { postComment } from "../../../api";

export const AddComment = ({ id, comments, setComments }) => {
  const [input, setInput] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const comment = await postComment(id, input);
    setComments([...comments, comment]);
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
