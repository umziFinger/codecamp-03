import { useQuery } from "@apollo/client";
import MyPointUI from "./myPoint.presenter";
import {
  FETCH_POINT_TRANSACTIONS,
  FETCH_USER_LOGGED_IN,
} from "./myPoint.queries";

export default function MyPoint() {
  const { data } = useQuery(FETCH_POINT_TRANSACTIONS);
  const { data: userdata } = useQuery(FETCH_USER_LOGGED_IN);

  console.log(data);
  return <MyPointUI data={data} userdata={userdata} />;
}
