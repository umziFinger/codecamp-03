import { gql, useQuery } from "@apollo/client";
import { useEffect } from "react";
import { useContext } from "react";
import { GlobalContext } from "../../_app";
import styled from "@emotion/styled";
import { withAuth } from "../../../src/components/commons/hoc/withAuth";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      name
      email
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  font-size: 30px;
`;

export const LoginSuccessPage = (props: any) => {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const { setUserInfo, userInfo }: any = useContext(GlobalContext);

  useEffect(() => {
    if (userInfo.name) return;
    setUserInfo({
      name: data?.fetchUserLoggedIn.name,
      email: data?.fetchUserLoggedIn.email,
    });
  }, [data]);

  console.log(userInfo);

  return <Wrapper>{data?.fetchUserLoggedIn.name}님 환영합니다</Wrapper>;
};

export default withAuth(LoginSuccessPage);
