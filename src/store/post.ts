import { useQuery } from "react-query";

export function usePosts() {
  return useQuery(
    ["posts"],
    async () =>
      await fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => json)
  );
}
