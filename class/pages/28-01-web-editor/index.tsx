import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
// import ReactQuill from "react-quill"; // 프론트엔드 서버에서 그릴 때, document가 없어서 에러발생
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

export default function WebEditorPage() {
  const { handleSubmit, register, setValue, trigger } = useForm({
    mode: "onChange",
  });
  const [createBoard] = useMutation(CREATE_BOARD);
  const router = useRouter();
  async function onClickMyButton(data) {
    console.log(data);
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: data.writer,
            password: data.password,
            title: data.title,
            contents: data.contents,
          },
        },
      });
      router.push(`/28-02-web-editor-detail/${result.data?.createBoard._id}`);
    } catch (err) {
      console.log(err);
    }
  }

  function onChangeMyEditor(value) {
    setValue("contents", value === "<p><br></p>" ? "" : value);
    console.log(value);
    trigger("contents");
  }

  return (
    <>
      <form onSubmit={handleSubmit(onClickMyButton)}>
        작성자 : <input type="text" {...register("writer")} />
        <br />
        비밀번호 : <input type="password" {...register("password")} />
        <br />
        제목 : <input type="text" {...register("title")} />
        <br />
        내용 : <ReactQuill onChange={onChangeMyEditor} theme="snow" />
        <br />
        <button>등록하기</button>
      </form>
    </>
  );
}
