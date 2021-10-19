import { useMutation } from "@apollo/client";
import { useContext } from "react";
import { useState } from "react";
import LoginUI from "./login.presenter";
import { LOGIN_USER } from "./login.queries";
import { GlobalContext } from "../../../../pages/_app";
import { useRouter } from "next/router";

export default function Login() {
  const [loginUser] = useMutation(LOGIN_USER);
  const router = useRouter();
  const { setAccessToken, accessToken } = useContext(GlobalContext);

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  function onChangeInputs(event) {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
  }

  async function onClickLogin() {
    const result = await loginUser({
      variables: {
        ...inputs,
      },
    });
    // console.log(result.data?.loginUser.accessToken);
    // localStorage.removeItem("")
    // localStorage.setItem("accessToken", result.data?.loginUser.accessToken);
    // setAccessToken(result.data?.loginUser.accessToken);
    localStorage.setItem("isLogedIn", "true");
    console.log(accessToken);
    router.push(`/login/success`);
  }

  return (
    <LoginUI onChangeInputs={onChangeInputs} onClickLogin={onClickLogin} />
  );
}
