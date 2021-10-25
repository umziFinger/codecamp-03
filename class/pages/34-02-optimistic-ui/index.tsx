import { gql, useMutation, useQuery } from "@apollo/client";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      likeCount
    }
  }
`;

const LIKE_BOARD = gql`
  mutation likeBoard($boardId: ID!) {
    likeBoard(boardId: $boardId)
  }
`;

export default function OptimisticUIPage() {
  const [likeBoard] = useMutation(LIKE_BOARD);
  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: "6170e1c2b55052002a93d14b",
    },
  });

  const onClickLike = () => {
    likeBoard({
      variables: { boardId: "6170e1c2b55052002a93d14b" },
      optimisticResponse: {
        likeBoard: data?.fetchBoard.likeCount + 1,
      },
      update(cache, { data }) {
        cache.writeQuery({
          query: FETCH_BOARD,
          variables: { boardId: "6170e1c2b55052002a93d14b" },
          data: {
            fetchBoard: {
              _id: "6170e1c2b55052002a93d14b",
              __typename: "Board",
              likeCount: data.likeBoard,
            },
          },
        });
      },
    });
  };

  return (
    <>
      <div>좋아요개수 : {data?.fetchBoard.likeCount}</div>
      <button onClick={onClickLike}>좋아요 올리기</button>
    </>
  );
}
