import Head from "next/head";
import MainPage from "../../src/components/units/board/main/main.container";

export default function Main() {
  return (
    <>
      <Head>
        <meta property="og:title" content="Umzi의 페이지" />
        <meta property="og:description" content="환영합니다" />
        <meta
          property="og:image"
          content="https://cdnweb01.wikitree.co.kr/webdata/editor/202004/07/img_20200407162305_1f42c686.webp"
        />
      </Head>
      <MainPage />
    </>
  );
}
