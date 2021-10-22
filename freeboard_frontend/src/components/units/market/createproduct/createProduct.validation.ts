import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup
    .string()
    .max(10, "상품명은 10자 이내여야합니다.")
    .required("필수입력 사항입니다."),
  remarks: yup
    .string()
    .max(20, "한줄요약은 20자 이내여야합니다")
    .required("필수입력 사항입니다"),
  contents: yup
    .string()
    .max(500, "상품설명은 500자 이내여야합니다.")
    .required("필수입력 사항입니다."),
  price: yup.number().required("필수입력 사항입니다"),
  tags: yup.string().matches(/^#/, "태그의 형식은 '#태그' 입니다."),
});
