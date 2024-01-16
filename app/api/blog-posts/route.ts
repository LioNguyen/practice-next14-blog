import { POST_PER_PAGE } from "@/lib/constants";
import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const page = searchParams.get("page") || 1;

  try {
    const posts = await prisma.post.findMany({
      take: POST_PER_PAGE,
      skip: POST_PER_PAGE * (+page - 1),
      orderBy: {
        createdAt: "desc",
      },
    });

    const count = await prisma.post.count();

    return NextResponse.json({ posts, count });
  } catch (error) {
    console.log("🚀 @log ~ GET ~ error:", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
