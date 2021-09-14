import { useState } from "react";
import DaumPostcode from "react-daum-postcode";
import { Modal } from "antd";

export default function ModalAdressPrevPage() {
  const [myZipcode, setMyZipcode] = useState("");
  const [myAddress, setMyAddress] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleComplete = (data) => {
    setMyZipcode(data.zonecode);
    setMyAddress(data.address);
    console.log(data.zonecode);
    console.log(data.address);

    setIsOpen((prev) => !prev);
  };

  function onToggleZipcode() {
    setIsOpen((prev) => !prev);
  }
  // 이전에 있던값을 가져와서 반대 값으로 바꿔줌 // 창이 없으면 클릭하면 isOpen에 트루값을 주면서 띄워주고, 창이 있으면 isOpen에 false를 주면서 닫아줌
  return (
    <>
      <button onClick={onToggleZipcode}>우편번호 검색</button>
      {isOpen && (
        <Modal visible={true} onCancel={onToggleZipcode} onOk={onToggleZipcode}>
          <DaumPostcode onComplete={handleComplete} />
        </Modal>
      )}
    </>
  );
}
