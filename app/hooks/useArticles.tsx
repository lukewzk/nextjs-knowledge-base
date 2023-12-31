import useSWR from "swr";
import axios from "axios";

export default function useArticles() {
  const fetcher = (url: string) =>
    axios.get(url).then((response) => response.data.articles);
  const { data, error, isLoading } = useSWR(
    `http://localhost:3000/api/articles/`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  return {
    articles: data,
    isLoading,
    isError: error,
  };
}
