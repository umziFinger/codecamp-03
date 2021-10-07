import * as yup from "yup";

const regexp =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{0,8}$/;

export const schema = yup.object().shape({
  writer: yup.string().max(5, "작성자는 5글자 이내입니다"),
  password: yup
    .string()
    .matches(
      regexp,
      "비밀번호는 숫자, 영문자, 특수문자를 모두사용해야하며 8글자 이내입니다"
    ),
  title: yup.string().max(100, "제목은 100자 이내입니다"),
  contents: yup.string().max(1000, "내용은 1000자 이내입니다"),
});
