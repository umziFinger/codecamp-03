import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import ProductDetailUI from "./productDetail.presenter";
import { DELETE_USED_ITEM, FETCH_USED_ITEM } from "./productDetail.queries";

export default function ProductDetail() {
  const router = useRouter();
  const [deleteUseditem] = useMutation(DELETE_USED_ITEM);

  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: {
      useditemId: router.query.useditemId,
    },
  });

  console.log(data?.fetchUseditem.images[0]);
  function onClickDelete() {
    deleteUseditem({
      variables: {
        useditemId: router.query.useditemId,
      },
    });
    alert("상품삭제 완료");
    router.push(`/market/list`);
  }

  function onClickUpdate() {
    router.push(`/market/detail/${router.query.useditemId}/edit`);
  }

  function onClickMoveToList() {
    router.push(`/market/list`);
  }

  return (
    <ProductDetailUI
      data={data}
      onClickDelete={onClickDelete}
      onClickUpdate={onClickUpdate}
      onClickMoveToList={onClickMoveToList}
    />
  );
}
