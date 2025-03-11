"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import React from "react";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

type VideoCardProps = {
  videos: {
    id: string;
    url: string;
    title: string;
    description?: string;
    author: { name: string };
    createdAt: string;
    tags: { name: string }[];
    category?: { name: string };
  }[];
};

const VideoCard: React.FC<VideoCardProps> = ({ videos }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {videos.map((video, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-lg overflow-hidden"
        >
          <ReactPlayer url={video.url} controls width="100%" />
          <div className="p-4">
            <Link href={`/video?id=${video.id}`}>
              <span className="text-lg font-semibold">{video.title}</span>
            </Link>
            {video.description && (
              <p className="text-gray-600">{video.description}</p>
            )}
            <div className="mt-2">
              <span className="text-sm text-gray-500">
                By {video.author.name}
              </span>
              <span className="text-sm text-gray-500 ml-2">
                {new Date(video.createdAt).toLocaleDateString()}
              </span>
            </div>
            {/* {video.tags.length > 0 && (
              <div className="mt-2">
                <span className="text-sm font-semibold">Tags: </span>
                {video.tags.map((tag, index) => (
                  <span key={index} className="text-sm text-blue-500 mr-1">
                    {tag.name}
                  </span>
                ))}
              </div>
            )}
            {video.category && (
              <div className="mt-2">
                <span className="text-sm font-semibold">Category: </span>
                <span className="text-sm text-blue-500">{video.category.name}</span>
              </div>
            )} */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoCard;
