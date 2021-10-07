import Button01 from "../../commons/buttons/button01/button01";
import EmailErrorMessage from "../../commons/errormessages/errorMessage/errorMessage";
import Input01 from "../../commons/inputs/email/input01";

export default function QuizUI(props) {
  return (
    <form onSubmit={props.handleSubmit(props.onClickSubmit)}>
      작성자: <Input01 type="text" register={props.register("writer")} />
      <EmailErrorMessage
        errorMessage={props.formState.errors.writer?.message}
      />
      <br />
      비밀번호:{" "}
      <Input01 type="password" register={props.register("password")} />
      <EmailErrorMessage
        errorMessage={props.formState.errors.password?.message}
      />
      <br />
      제목: <Input01 type="text" register={props.register("title")} />
      <EmailErrorMessage errorMessage={props.formState.errors.title?.message} />
      <br />
      내용: <Input01 type="text" register={props.register("contents")} />
      <EmailErrorMessage
        errorMessage={props.formState.errors.contents?.message}
      />
      <br />
      <Button01 name="등록하기" isValid={props.formState.isValid} />
    </form>
  );
}
