import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      writer
      title
      createdAt
      _id
    }
  }
`;

const Page = styled.span`
  margin: 10px;
  cursor: pointer;
`;

export default function PaginationBasicPage() {
  const { data, refetch } = useQuery(FETCH_BOARDS, {
    variables: { page: 1 },
  });

  function onClickPage(event) {
    refetch({
      page: Number(event.target.id),
    });
  }

  return (
    <>
      <div>페이지네이션</div>
      <div>
        {data?.fetchBoards.map((el) => (
          <div key={el._id}>{el.title}</div>
        ))}
      </div>
      <br />
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el) => (
        <Page id={String(el)} key={el} onClick={onClickPage}>
          {el}
        </Page>
      ))}
    </>
  );
}
