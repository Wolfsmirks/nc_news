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

export const patchArticleVotes = async (id, inc_votes) => {
  await fetch(`https://northcoders-news-4vbk.onrender.com/api/articles/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ inc_votes }),
  });
};

export const postComment = async (id, body) => {
  const res = await fetch(
    `https://northcoders-news-4vbk.onrender.com/api/articles/${id}/comments`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: "grumpy19", body }),
    }
  );
  const { comment } = await res.json();
  return comment;
};

export const deleteComment = async (id) => {
  await fetch(`https://northcoders-news-4vbk.onrender.com/api/comments/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};
