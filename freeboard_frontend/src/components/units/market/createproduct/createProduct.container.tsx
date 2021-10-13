import CreateProductUI from "./createProduct.presenter";
import { useForm } from "react-hook-form";
import { schema } from "./createProduct.validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import {
  CREATE_USED_ITEM,
  FETCH_USED_ITEM,
  UPDATE_USED_ITEM,
  UPLOAD_FILE,
} from "./createProduct.queries";
import { useRouter } from "next/router";

export default function CreateProduct(props) {
  // const [inputs, setInputs] = useState();
  const router = useRouter();
  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: router.query.useditemId },
  });

  const [createUseditem] = useMutation(CREATE_USED_ITEM);
  const [updateUseditem] = useMutation(UPDATE_USED_ITEM);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const [files, setFiles] = useState([null, null, null]);

  const { handleSubmit, register, formState, setValue, trigger } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  async function onClickSubmit(data) {
    console.log({ ...data });

    const uploadFiles = files
      .filter((el) => el)
      .map((el) =>
        uploadFile({
          variables: { file: el },
        })
      );
    const results = await Promise.all(uploadFiles);
    const imageUrl = results.map((el) => el?.data.uploadFile.url || "");

    const result = await createUseditem({
      variables: {
        createUseditemInput: { ...data, images: imageUrl },
      },
    });
    console.log(result);
    router.push(`/market/detail/${result.data?.createUseditem._id}`);
    // setInputs(data);
  }

  function onClickUpdate(data) {
    updateUseditem({
      variables: {
        updateUseditemInput: { ...data },
        useditemId: router.query.useditemId,
      },
    });
    router.push(`/market/detail/${router.query.useditemId}`);
  }

  function onChangeFile(file: any, index: any) {
    const newFiles = [...files];
    newFiles[index] = file;
    setFiles(newFiles);
  }

  function updateCancel() {
    router.push(`/market/detail/${router.query.useditemId}`);
  }

  function onChangeContents(value) {
    setValue("contents", value === "<p><br></p>" ? "" : value);
    console.log(value);
    trigger("contents");
  }

  return (
    <CreateProductUI
      handleSubmit={handleSubmit}
      register={register}
      formState={formState}
      onClickSubmit={onClickSubmit}
      onChangeFile={onChangeFile}
      isEdit={props.isEdit}
      updateCancel={updateCancel}
      data={data}
      onClickUpdate={onClickUpdate}
      onChangeContents={onChangeContents}
    />
  );
}
