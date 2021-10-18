import { useState } from "react";
import PointChargeUI from "./pointCharge.presenter";
import Head from "next/head";
import { useMutation } from "@apollo/client";
import { CREATE_POINT_TRANSACTION_OF_LOADING } from "./pointCharge.queries";

declare const window: typeof globalThis & {
  IMP: any;
};

export default function PointCharge(props) {
  const [amount, setAmount] = useState(0);
  const [createPointTransactionOfLoading] = useMutation(
    CREATE_POINT_TRANSACTION_OF_LOADING
  );

  function onClickPayment() {
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp49910675"); // 예: imp00000000
    IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        pay_method: "card",
        name: "포인트충전",
        amount: amount,
        buyer_email: "gildong@gmail.com",
        buyer_name: "홍길동",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
      },
      async function (rsp: any) {
        // callback
        if (rsp.success) {
          console.log(rsp);
          // ...,
          // 결제 성공 시 로직,
          const result = await createPointTransactionOfLoading({
            variables: {
              impUid: rsp.imp_uid,
            },
          });
          console.log(result);
          alert("충전이 완료되었습니다.");
        } else {
          // ...,
          // 결제 실패 시 로직,
          // ...
        }
      }
    );
    props.setModalVisible((prev) => !prev);
  }

  function closeModal() {
    props.setModalVisible((prev) => !prev);
  }

  function onChangeAmount(value) {
    setAmount(value);
  }

  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      <PointChargeUI
        modalVisible={props.modalVisible}
        onClickPayment={onClickPayment}
        onChangeAmount={onChangeAmount}
        closeModal={closeModal}
      />
    </>
  );
}
