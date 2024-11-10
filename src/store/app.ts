export const useAppStore = defineStore("app", () => {
  const state = {
    test: "Hello, World!"
  };
  return {
    state
  };
});
