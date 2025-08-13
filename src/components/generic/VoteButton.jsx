import { patchArticleVotes } from "../../api";

export const VoteButton = ({ articleId, handleVote }) => {
  const handleClick = async () => {
    if (!navigator.onLine) {
      console.log("offline");
    } else {
      handleVote(1);
      try {
        await patchArticleVotes(articleId, 1);
      } catch (err) {
        handleVote(-1);
      }
    }
  };
  return <button onClick={handleClick}>Vote</button>;
};
