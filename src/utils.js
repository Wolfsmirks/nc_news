export const convertToTimestamp = (created_at) => {
  return new Date(created_at).toLocaleDateString("en-UK", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};
