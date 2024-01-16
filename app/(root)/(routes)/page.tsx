import { HomePage } from "@/components/templates/home/HomePage";
import { fetchData } from "@/lib/utils";

interface HomeProps {
  searchParams: any;
}

export default async function Home({ searchParams }: HomeProps) {
  const page = +searchParams.page || 1;

  const { data, error } = await fetchData(
    `${process.env.BASE_URL}/api/blog-posts?page=${page}`
  );
  const postList = data.posts.map((item: any) => {
    return {
      id: item.id,
      title: item.title,
      description: item.description,
      createdAt: item.createdAt,
      showReadMore: true,
    };
  });

  return (
    <div>
      <HomePage totalPosts={data.count} page={page} postList={postList} />
    </div>
  );
}
