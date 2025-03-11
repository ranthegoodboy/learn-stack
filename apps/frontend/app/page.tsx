import VideoCard from "@/components/videos/video-card";
import { fetchVideos } from "@/lib/videos/fetch-videos";

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};
export default async function Home({ searchParams }: Props) {
  const { page } = await searchParams;
  const { videos, videoCount } = await fetchVideos({
    page: page ? +page : undefined,
  });
  console.log("videos", videos, videoCount);
  return (
    <main className="">
      <section className="px-5 pt-20">
        <h2>Videos</h2>
        <VideoCard videos={videos} />
      </section>
    </main>
  );
}
