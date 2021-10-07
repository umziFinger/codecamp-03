import { useRouter } from "next/router";
import { useEffect } from "react";
import { useContext } from "react";
import { GlobalContext } from "../../../../pages/_app";

export const withAuth = (Component) => (props) => {
  const { accessToken } = useContext(GlobalContext);
  const router = useRouter();

  useEffect(() => {
    if (!accessToken) {
      alert("로그인이 필요합니다");
      router.push(`/login`);
    }
  }, []);

  return <Component {...props} />;
};
