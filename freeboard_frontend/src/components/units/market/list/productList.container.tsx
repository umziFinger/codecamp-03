import { useQuery } from "@apollo/client";
import ProductListUI from "./productList.presenter";
import { FETCH_USED_ITEMS } from "./productList.queries";

export default function ProductList() {
  const { data } = useQuery(FETCH_USED_ITEMS);

  console.log(data);

  return <ProductListUI data={data} />;
}
