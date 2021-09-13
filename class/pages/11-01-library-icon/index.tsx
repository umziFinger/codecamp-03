import { PlusCircleOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

const MyIcon = styled(PlusCircleOutlined)`
  font-size: 100px;
  color: orange;
`;

export default function LibraryIconPage() {
  return (
    <div>
      <MyIcon />
    </div>
  );
}
