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
          content={`https://storage.googleapis.com/codecamp-file-storage/2021/10/26/banner4.jpeg`}
        />
      </Head>
      <MainPage />
    </>
  );
}
