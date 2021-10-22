import { useQuery } from "@apollo/client";
import MyPointUI from "./myPoint.presenter";
import { FETCH_POINT_TRANSACTIONS } from "./myPoint.queries";

export default function MyPoint() {
  const { data } = useQuery(FETCH_POINT_TRANSACTIONS);

  console.log(data);
  return <MyPointUI data={data} />;
}
