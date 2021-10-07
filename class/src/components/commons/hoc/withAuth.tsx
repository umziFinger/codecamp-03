import { useRouter } from "next/router";
import { useEffect, useContext } from "react";
import { GlobalContext } from "../../../../pages/_app";

export const withAuth = (Component) => (props) => {
  const { accessToken } = useContext(GlobalContext);
  const router = useRouter();

  useEffect(() => {
    if (!accessToken) {
      alert("로그인 필요");
      router.push(`/23-01-login`);
    }
  });

  return <Component {...props} />;
};
