import { useGetPostsQuery } from "@/store/api";
import { Button, Input, Stack, Textarea } from "@chakra-ui/react";
import type { NextPage } from "next";

const Home: NextPage = () => {
  const { data } = useGetPostsQuery();

  return (
    <div>
      <Input />
      <Textarea />
      <Button> Create Post</Button>

      <Stack>
        {data?.map((post) => (
          <div key={post.id}>{post.title}</div>
        ))}
      </Stack>
    </div>
  );
};

export default Home;
