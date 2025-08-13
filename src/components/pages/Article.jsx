import { useParams } from "react-router-dom";
import { SpecificArticle } from "../page-contents/article/SpecificArticle";
import { ArticleComments } from "../page-contents/article/ArticleComments";

export const Article = () => {
  const { article_id } = useParams();

  return (
    <>
      <SpecificArticle articleId={article_id} />
      <ArticleComments articleId={article_id} />
    </>
  );
};
