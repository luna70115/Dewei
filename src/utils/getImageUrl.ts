export const getImageUrl = (router: string): string => {
  return new URL(`../assets/images/${router}?format=webp`, import.meta.url)
    .href;
};

export default getImageUrl;
