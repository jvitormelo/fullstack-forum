import { PostDTO } from "../server/resources/posts/dtos/output/PostDTO";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postAPI = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query<PostDTO[], void>({
      query: () => `posts`,
    }),
  }),
});

export const { useGetPostsQuery } = postAPI;
