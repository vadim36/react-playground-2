export const getPagesCount: getPagesCountType = (postsCount, limit) => {
  return Math.ceil(postsCount / limit)
}