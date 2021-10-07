import { useRouter } from "next/router";
import { useEffect } from "react";
import { useContext } from "react";
import { GlobalContext } from "../../../../pages/_app";

export const withAuth = (Component) => (props) => {
  const router = useRouter();

  useEffect(() => {
    const accessTokenItem = window.localStorage.getItem("accessToken");
    if (!accessTokenItem) {
      alert("로그인이 필요합니다");
      router.push(`/login`);
    }
  }, []);

  return <Component {...props} />;
};
