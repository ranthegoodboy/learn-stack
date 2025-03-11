"use server";

import { fetchGraphQL } from "@/lib/fetch-graphql";
import { print } from "graphql";
import { GET_VIDEOS } from "../graphql-queries";
import { transformTakeSkip } from "../helper";

export const fetchVideos = async ({
  page,
  pageSize,
}: {
  page?: number;
  pageSize?: number;
}) => {
  const { skip, take } = transformTakeSkip({ page, pageSize });
  const data = await fetchGraphQL(print(GET_VIDEOS), { skip, take });
  return { videos: data.videos, videoCount: data.videoCount };
};
