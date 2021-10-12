import { gql, useMutation, useQuery } from "@apollo/client";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      writer
      title
      contents
      _id
    }
  }
`;

const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      title
      contents
      writer
    }
  }
`;

export default function ApolloCacheStatePage() {
  const { data } = useQuery(FETCH_BOARDS);
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [createBoard] = useMutation(CREATE_BOARD);

  const onClickDelete = (boardId) => async () => {
    await deleteBoard({
      // 가장가까운 함수에 async 붙이기
      variables: { boardId }, // 1번요청(deleteBoard)
      update(cache, { data }) {
        // 1번요청이 끝나면 실행 // data에는 1번요청의 응답이 들어옴 (기존에 const result에 들어오던 값)

        const deletedId = data.deleteBoard;
        cache.modify({
          fields: {
            fetchBoards: (prev, { readField }) => {
              // prev = 기존의 10개
              // 1. 기존의 fetchboards10개에서, 지금 삭제된 ID를 제외한 9개를 만들고
              // 2. 그렇게 만들어진 9개의 새로운 fetchBoards를 return하여, 덮어씌우기
              const newFetchBoards = prev.filter(
                // ---------- 1
                (el) => readField("_id", el) !== deletedId
              );

              return [...newFetchBoards]; // ---------- 2
            },
          },
        });
      },
    });
  };

  const onClickCreate = async () => {
    await createBoard({
      variables: {
        createBoardInput: {
          writer: "sk이노베이션",
          password: "1234",
          title: "wpahr",
          contents: "sodyd",
        },
      },
      update(cache, { data }) {
        cache.modify({
          fields: {
            fetchBoards: (prev, { readField }) => {
              return [data.createBoard, ...prev];
            },
          },
        });
      },
    });
  };

  return (
    <>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span>{el.writer}</span>
          <span>{el.title}</span>
          <span>{el.contents}</span>
          <button onClick={onClickDelete(el._id)}>삭제하기</button>
        </div>
      ))}
      <button onClick={onClickCreate}>등록하기</button>
    </>
  );
}
