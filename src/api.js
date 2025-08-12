export const fetchAllArticles = async () => {
  const res = await fetch(
    "https://northcoders-news-4vbk.onrender.com/api/articles"
  );
  const { articles } = await res.json();
  return articles;
};

export const fetchArticleById = async (id) => {
  const res = await fetch(
    `https://northcoders-news-4vbk.onrender.com/api/articles/${id}`
  );
  const article = await res.json();
  return article;
};

export const fetchCommentsByArticle = async (id) => {
  const res = await fetch(
    `https://northcoders-news-4vbk.onrender.com/api/articles/${id}/comments`
  );
  const comments = await res.json();
  return comments;
};
