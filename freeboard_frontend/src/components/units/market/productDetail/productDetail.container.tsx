import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import ProductDetailUI from "./productDetail.presenter";
import { FETCH_USED_ITEM } from "./productDetail.queries";

export default function ProductDetail() {
  const router = useRouter();

  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: {
      useditemId: router.query.useditemId,
    },
  });

  return <ProductDetailUI data={data} />;
}
