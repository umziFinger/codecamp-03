import { Modal } from "antd";
import { Select } from "antd";

const { Option } = Select;

export default function PointChargeUI(props) {
  return (
    <>
      <Modal
        visible={props.modalVisible}
        onCancel={props.closeModal}
        onOk={props.closeModal}
      >
        <Select
          defaultValue="100"
          style={{ width: 300 }}
          onChange={props.onChangeAmount}
        >
          <Option value="100">100</Option>
          <Option value="500">500</Option>
          <Option value="2000">2000</Option>
          <Option value="5000">5000</Option>
        </Select>
        <button onClick={props.onClickPayment}>충전하기</button>
      </Modal>
    </>
  );
}
