"use client";

import { useVideo } from "@/hooks/use-video";
import { useSearchParams } from "next/navigation";
import React from "react";

const VideoPage = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const videoId = id ? parseInt(id, 10) : null;

  const { data } = useVideo(videoId || 0);

  console.log("data", data);

  if (!id) return <div>Invalid videoId</div>;

  return <div></div>;
};

export default VideoPage;
