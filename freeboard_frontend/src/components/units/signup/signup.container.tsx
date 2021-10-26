import { useMutation } from "@apollo/client";
import { useState } from "react";
import SignUpUI from "./signup.presenter";
import { CREATE_USER } from "./signup.queries";
import { useRouter } from "next/router";

export default function SignUp() {
  const [password2, setPassword2] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const router = useRouter();

  const [inputs, setInputs] = useState({
    email: "",
    name: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    emailError: "",
    nameError: "",
    passwordError: "",
  });

  const [createUser] = useMutation(CREATE_USER);

  function onChangeInputs(event: any) {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });

    // if (!/\w@\w+\.com/.test(inputs.email)) {
    //   setErrors({
    //     ...errors,
    //     emailError: "이메일 형식을 다시 확인해주세요.",
    //   });
    // } else {
    //   setErrors({
    //     ...errors,
    //     emailError: "",
    //   });
    // }

    // if (inputs.name === "") {
    //   setErrors({
    //     ...errors,
    //     nameError: "이름을 다시 확인해주세요.",
    //   });
    // } else {
    //   setErrors({
    //     ...errors,
    //     nameError: "",
    //   });
    // }

    // if (inputs.password === "" || inputs.password !== password2) {
    //   setErrors({
    //     ...errors,
    //     passwordError: "비밀번호가 일치하지 않습니다.",
    //   });
    // } else {
    //   setErrors({
    //     ...errors,
    //     passwordError: "",
    //   });
    // }
  }

  function onChangePassword2(event: any) {
    setPassword2(event.target.value);
  }

  async function onClickSignUp() {
    if (!/\w@\w+\.com/.test(inputs.email)) {
      setErrors({
        ...errors,
        emailError: "이메일 형식을 다시 확인해주세요. (example@codecamp.com)",
      });
      return;
    }

    if (inputs.name === "") {
      setErrors({
        ...errors,
        nameError: "이름을 다시 확인해주세요.",
      });
      return;
    }

    if (inputs.password === "" || inputs.password !== password2) {
      setErrors({
        ...errors,
        passwordError: "비밀번호가 일치하지 않습니다.",
      });
      return;
    }

    const result = await createUser({
      variables: {
        createUserInput: {
          ...inputs,
        },
      },
    });
    console.log(result.data.createUser);

    setIsModalVisible((prev) => !prev);
  }

  function closeModal() {
    router.push(`/login`);
  }

  return (
    <SignUpUI
      onChangeInputs={onChangeInputs}
      onClickSignUp={onClickSignUp}
      onChangePassword2={onChangePassword2}
      errors={errors}
      isModalVisible={isModalVisible}
      closeModal={closeModal}
    />
  );
}
