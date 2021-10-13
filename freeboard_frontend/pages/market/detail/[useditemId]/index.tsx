import { gql, useQuery } from "@apollo/client";
import { OmitProps } from "antd/lib/transfer/ListBody";
import { useRouter } from "next/router";
import ProductCommentList from "../../../../src/components/units/market/productComment/productCommentList/productCommentList.container";
import ProductCommentWrite from "../../../../src/components/units/market/productComment/productCommentWrite/productCommentWrite.container";
import ProductDetail from "../../../../src/components/units/market/productDetail/productDetail.container";

const FETCH_USED_ITEM_QUESTIONS = gql`
  query fetchUseditemQuestions($useditemId: ID!) {
    fetchUseditemQuestions(useditemId: $useditemId) {
      _id
      user {
        name
      }
      contents
    }
  }
`;

export default function UsedItemDetail() {
  const router = useRouter();

  const { data } = useQuery(FETCH_USED_ITEM_QUESTIONS, {
    variables: { useditemId: router.query.useditemId },
  });

  return (
    <>
      <ProductDetail />
      <ProductCommentWrite />
      {data?.fetchUseditemQuestions.map((el) => (
        <ProductCommentList key={el._id} el={el} />
      ))}
    </>
  );
}
