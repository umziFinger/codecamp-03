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

const Row = styled.div`
  display: flex;
`;

const Column = styled.div`
  margin: 20px;
`;

export default function EventBubblingPage() {
  const { data } = useQuery(FETCH_BOARDS);

  function onClickRow(event) {
    // alert("클릭!!");
    alert(event.currentTarget.id);
  }

  return (
    <>
      <div>이벤트버블링</div>
      <div>
        {data?.fetchBoards.map((el) => (
          <Row key={el._id} id={el._id} onClick={onClickRow}>
            <Column>{el.writer}</Column>
            <Column>{el.createdAt}</Column>
            <Column>{el.title}</Column>
          </Row>
        ))}
      </div>
    </>
  );
}
