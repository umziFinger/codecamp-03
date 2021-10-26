import Head from "next/head";

export default function BoardPage() {
  return (
    <>
      <Head>
        <meta property="og:title" content="나의 사이트 게시판 페이지" />
        <meta property="og:description" content="환영합니다" />
        <meta
          property="og:image"
          content="https://cdnweb01.wikitree.co.kr/webdata/editor/202004/07/img_20200407162305_1f42c686.webp"
        />
      </Head>
      <div>페이지sdfgsdfg입니다.</div>
    </>
  );
}

export const getServerSideProps = () => {};
