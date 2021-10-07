import Button01 from "../../commons/buttons/button01/button01";
import Input01 from "../../commons/inputs/email/input01";
import EmailErrorMessage from "../../commons/errormessages/errorMessage/errorMessage";

export default function MyFormUI(props) {
  return (
    <form onSubmit={props.handleSubmit(props.onClickLogin)}>
      <div>리액트 훅폼 연습</div>
      <br />
      이메일 :<Input01 type="text" register={props.register("myEmail")} />
      <EmailErrorMessage
        errorMessage={props.formState.errors.myEmail?.message}
      />
      <br />
      비밀번호 :<input type="password" {...props.register("myPassword")} />
      <EmailErrorMessage
        errorMessage={props.formState.errors.myPassword?.message}
      />
      <br />
      <Button01 name="로그인" type="submit" isValid={props.formState.isValid} />
    </form>
  );
}
