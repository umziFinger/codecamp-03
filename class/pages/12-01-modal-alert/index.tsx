import { Modal } from "antd";

export default function ModalAlertPage() {
  function onClickSuccess() {
    try {
      //   alert("게시물 등록에 성공했습니다.");
      Modal.confirm({ content: "게시물 등록에 성공했습니다." });
    } catch (err) {
      //   alert("게시물 등록에 실패했습니다");
      Modal.error({ content: "게시물 등록에 실패했습니다" });
    }
  }
  function onClickFail() {
    try {
      throw new Error("강제로 에러 발생시키기");
    } catch (err) {
      Modal.error({ content: err.message });
    }
  }

  return (
    <>
      <button onClick={onClickSuccess}>알림창 (성공했을떄)</button>
      <button onClick={onClickFail}>알림창 (실패했을떄)</button>
    </>
  );
}
