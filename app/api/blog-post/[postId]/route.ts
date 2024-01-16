import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";

interface Props {
  params: any;
}

export async function GET(req: Request, { params }: Props) {
  const { postId } = params;

  try {
    const post = await prisma.post.findFirst({
      where: {
        id: postId,
      },
    });

    return NextResponse.json(post);
  } catch (error) {
    console.log("🚀 @log ~ GET ~ error:", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
