"use client";

import dynamic from "next/dynamic";
import React from "react";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

type VideoCardProps = {
  videos: { url: string; title: string }[];
};

const VideoCard: React.FC<VideoCardProps> = ({ videos }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {videos.map((video, index) => (
        <div key={index} className="video-card">
          <h3>{video.title}</h3>
          <ReactPlayer url={video.url} controls={false} width="100%" />
        </div>
      ))}
    </div>
  );
};

export default VideoCard;
