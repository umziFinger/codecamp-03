import { withAuth } from "../../../src/components/commons/hoc/withAuth";
import CreateProduct from "../../../src/components/units/market/createproduct/createProduct.container";

const NewProductPage = () => {
  return <CreateProduct />;
};

export default withAuth(NewProductPage);
