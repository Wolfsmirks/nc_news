import { useParams } from "react-router-dom";
import { ArticlesOnTopic } from "../page-contents/topic/ArticlesOnTopic";

export const Topic = () => {
  const { topic } = useParams();

  return (
    <>
      <ArticlesOnTopic topic={topic} />
    </>
  );
};
