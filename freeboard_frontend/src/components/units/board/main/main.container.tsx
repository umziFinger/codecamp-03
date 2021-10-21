import { useRouter } from "next/router";
import MainPageUI from "./main.presenter";

export default function MainPage() {
  const router = useRouter();

  function onClickMoveToHomePage() {
    router.push("/boards/list");
  }

  return <MainPageUI onClickMoveToHomePage={onClickMoveToHomePage} />;
}
