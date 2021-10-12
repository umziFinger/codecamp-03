import { gql, useApolloClient, useMutation } from "@apollo/client";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { GlobalContext } from "../_app";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
      picture
    }
  }
`;

export default function UseApolloClientPage() {
  const { handleSubmit, register } = useForm();
  const [loginUser] = useMutation(LOGIN_USER);
  const client = useApolloClient();

  const { setAccessToken, setUserInfo, userInfo } = useContext(GlobalContext);

  async function onClickLogin(data) {
    const result = await loginUser({
      variables: {
        email: data.myEmail,
        password: data.myPassword,
      },
    });
    const accessToken = result.data?.loginUser.accessToken;
    const resultUserInfo = await client.query({
      query: FETCH_USER_LOGGED_IN,
      context: {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      },
    });
    const userInfo = resultUserInfo.data.fetchUserLoggedIn;

    setAccessToken(accessToken);
    setUserInfo(userInfo);
  }

  return (
    <>
      {userInfo.email ? `${userInfo.name}님 환영합니다.` : "로그인해주세요"}
      {!userInfo.email && (
        <form onSubmit={handleSubmit(onClickLogin)}>
          이메일 :<input type="text" {...register("myEmail")} />
          비밀번호: <input type="text" {...register("myPassword")} />
          <button>로그인</button>
        </form>
      )}
    </>
  );
}
