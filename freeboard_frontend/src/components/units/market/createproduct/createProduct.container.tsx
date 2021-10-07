import CreateProductUI from "./createProduct.presenter";
import { useForm } from "react-hook-form";
import { schema } from "./createProduct.validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_USED_ITEM } from "./createProduct.queries";
import { useRouter } from "next/router";

export default function CreateProduct() {
  // const [inputs, setInputs] = useState();

  const [createUseditem] = useMutation(CREATE_USED_ITEM);

  const router = useRouter();
  const { handleSubmit, register, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  async function onClickSubmit(data) {
    console.log({ ...data });

    const result = await createUseditem({
      variables: {
        createUseditemInput: { ...data },
      },
    });
    console.log(result);
    router.push(`/market/detail/${result.data?.createUseditem._id}`);
    // setInputs(data);
  }
  return (
    <CreateProductUI
      handleSubmit={handleSubmit}
      register={register}
      formState={formState}
      onClickSubmit={onClickSubmit}
    />
  );
}
