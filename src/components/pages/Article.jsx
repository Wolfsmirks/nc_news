import { useParams } from "react-router-dom";
import { SpecificArticle } from "../page-contents/article/SpecificArticle";
import { ArticleComments } from "../page-contents/article/ArticleComments";

export const Article = () => {
  const { article_id } = useParams();

  return (
    <>
      <SpecificArticle id={article_id} />
      <ArticleComments id={article_id} />
    </>
  );
};
