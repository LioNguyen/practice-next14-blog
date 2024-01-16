import {
  ListPagination,
  ListPaginationProps,
} from "@/components/molecules/list-pagination/ListPagination";
import {
  PostCard,
  PostCardProps,
} from "@/components/molecules/post-card/PostCard";

interface DataProps extends PostCardProps {}

export interface PostListProps extends ListPaginationProps {
  data: DataProps[];
}

export function PostList({ data, activePage, totalPages }: PostListProps) {
  return (
    <div>
      {data?.map((item) => (
        <PostCard key={item?.id} {...item} />
      ))}
      <ListPagination activePage={activePage} totalPages={totalPages} />
    </div>
  );
}
