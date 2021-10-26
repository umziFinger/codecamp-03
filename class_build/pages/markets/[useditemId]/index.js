import Head from "next/head";
import { gql, request } from "graphql-request";

export default function MarketsPage() {
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
      <div>마켓페이지 입니다</div>
    </>
  );
}

const FETCH_USEDITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      name
      remarks
      images
    }
  }
`;

export const getServerSideProps = async (context) => {
  await request(
    "https://backend03.codebootcamp.co.kr/graphql",
    FETCH_USEDITEM,
    {
      useditemId: context.query.useditemId,
    }
  );

  return {
    props: {
      fetchUseditem: result.fetchUseditem,
    },
  };
};
