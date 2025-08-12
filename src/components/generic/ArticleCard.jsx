import "./generic.css";

export const ArticleCard = ({
  article: {
    title,
    topic,
    author,
    created_at,
    votes,
    article_img_url,
    comment_count,
  },
}) => {
  const timestamp = new Date(created_at).toLocaleDateString("en-UK", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <article className="article-card">
      <h2>{title}</h2>
      <p>{topic}</p>
      <p>{author}</p>
      <p>{timestamp}</p>
      <p>{votes}</p>
      <p>{comment_count}</p>
      <img src={article_img_url} />
    </article>
  );
};
