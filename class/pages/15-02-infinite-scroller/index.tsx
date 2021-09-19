import InfiniteScroll from "react-infinite-scroller";
import { useQuery, gql } from "@apollo/client";
const FECTCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;
export default function InfiniteScrollerPage() {
  const { data, fetchMore } = useQuery(FECTCH_BOARDS);
  function onLoadMore() {
    if (!data) return;
    fetchMore({
      variables: { page: data?.fetchBoards.length / 10 + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        return {
          fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards],
        };
      },
    });
  }
  return (
    <InfiniteScroll pageStart={0} loadMore={onLoadMore} hasMore={true}>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span>{el.writer}</span>
          <span>{el.title}</span>
          <span>{el.contents}</span>
        </div>
      ))}
    </InfiniteScroll>
  );
}
