import { useParams } from "react-router-dom";
import { ArticlesOnTopic } from "../page-contents/topic/ArticlesOnTopic";

export const Topic = () => {
  const { topic } = useParams();

  return (
    <>
      <h1>{topic}</h1>
      <ArticlesOnTopic topic={topic} />
    </>
  );
};
