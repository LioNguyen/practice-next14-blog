"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { PostCardProps } from "@/components/molecules/post-card/PostCard";
import { PostList } from "@/components/organisms/post-list/PostList";
import { POST_PER_PAGE } from "@/lib/constants";

interface HomePageProps {
  page: number;
  postList: PostCardProps[];
  totalPosts: number;
}

export function HomePage({ page, postList, totalPosts }: HomePageProps) {
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  const remaining = totalPosts % POST_PER_PAGE;
  const totalPages =
    Math.floor(totalPosts / POST_PER_PAGE) + (remaining > 0 ? 1 : 0);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <div>
      <PostList data={postList} activePage={page} totalPages={totalPages} />
    </div>
  );
}
