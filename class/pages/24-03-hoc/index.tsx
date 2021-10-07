import { withAuth } from "../../src/components/commons/hoc/withAuth";

const HocPage = () => {
  return <div>HOC연습 페이지</div>;
};

export default withAuth(HocPage);
