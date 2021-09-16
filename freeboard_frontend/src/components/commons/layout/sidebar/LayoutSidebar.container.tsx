import { useRouter } from "next/dist/client/router";
import LayoutSidebarUI from "./LayoutSidebar.presenter";

export default function LayoutSidebar() {
  const router = useRouter();

  function onClickList() {
    router.push("/boards/list");
  }

  function onClickWrite() {
    router.push("/boards/new");
  }

  return (
    <LayoutSidebarUI onClickList={onClickList} onClickWrite={onClickWrite} />
  );
}
