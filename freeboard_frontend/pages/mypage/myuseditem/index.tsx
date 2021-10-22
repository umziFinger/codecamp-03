import { withAuth } from "../../../src/components/commons/hoc/withAuth";
import MyUseditem from "../../../src/components/units/mypage/myUseditem/myUseditem.container";

const MyUseditemPage = () => {
  return <MyUseditem />;
};

export default withAuth(MyUseditemPage);
