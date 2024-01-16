import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { format } from "date-fns";
import Link from "next/link";
import React from "react";

export interface PostCardProps {
  id: string;
  title: string;
  description: string;
  createdAt: Date;
  showReadMore?: boolean;
}

export function PostCard({
  id,
  title,
  description,
  createdAt,
  showReadMore,
}: PostCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          {format(createdAt, "MMMM do, yyyy hh:mm")}
        </CardDescription>
      </CardHeader>
      <CardContent dangerouslySetInnerHTML={{ __html: description }} />
      {showReadMore && (
        <CardFooter>
          <Link
            href={`/post/${id}`}
            className="text-sm underline underline-offset-2 decoration-pink-500 hover:cursor-pointer"
          >
            Read More
          </Link>
        </CardFooter>
      )}
    </Card>
  );
}
