import { useRouter } from "next/router";

export default function KaKaoMapRoutingPage() {
  const router = useRouter();

  function onClickKaKaoMap() {
    router.push(`/29-03-kakao-map-routed`);
  }

  return <button onClick={onClickKaKaoMap}>이동</button>;
}
