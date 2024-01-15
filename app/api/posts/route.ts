import prisma from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const posts = await prisma.post.findMany({
      where: {
        userId: "1",
      },
    });

    return NextResponse.json(posts);
  } catch (error) {
    console.log("🚀 @log ~ GET ~ error:", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function POST(req: Request) {
  const { userId } = auth();

  console.log("🚀 @log ~ POST ~ userId:", userId);

  const { title, description } = await req.json();

  try {
    if (!userId) {
      return new NextResponse("Unauthenticated", { status: 401 });
    }
    if (!title) {
      return new NextResponse("Title is required", { status: 400 });
    }
    if (!description) {
      return new NextResponse("Description is required", { status: 400 });
    }
    const posts = await prisma.post.create({
      data: {
        userId,
        title,
        description,
      },
    });
    return NextResponse.json(posts);
  } catch (error) {
    console.log("🚀 @log ~ POST ~ error:", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
