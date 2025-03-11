"use server";

import { fetchGraphQL } from "@/lib/fetch-graphql";
import { print } from "graphql";
import { GET_VIDEO } from "../graphql-queries";

export const fetchVideo = async ({ id }: { id: number }) => {
  console.log("id", id);
  const data = await fetchGraphQL(print(GET_VIDEO), { id });
  return { video: data.video };
};
