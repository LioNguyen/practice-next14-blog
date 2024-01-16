import React from "react";

import {
  PostCard,
  PostCardProps,
} from "@/components/molecules/post-card/PostCard";
import { fetchData } from "@/lib/utils";

interface PostDetailProps {
  params: {
    postId: string;
  };
}

export default async function PostDetail({ params }: PostDetailProps) {
  const data = await fetchData(
    `${process.env.BASE_URL}/api/blog-post/${params.postId}`
  );

  return (
    <div>
      <PostCard {...data.data} />
    </div>
  );
}
