import { useParams } from "react-router-dom";
import { SpecificArticle } from "../page-contents/article/SpecificArticle";
import { ArticleComments } from "../page-contents/article/ArticleComments";

export const Article = () => {
  const { article } = useParams();

  return (
    <>
      <SpecificArticle id={article} />
      <ArticleComments id={article} />
    </>
  );
};
