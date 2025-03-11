import { fetchVideo } from "@/lib/videos/fetch-video";
import { useQuery } from "@tanstack/react-query";

export const useVideo = (id: number) => {
  return useQuery({ queryKey: ["video"], queryFn: () => fetchVideo({ id }) });
};
