import { useMutation } from "@apollo/client";
import { useRef, useState } from "react";
import { fileValidation } from "../../../../commons/libraries/validation";
import Uploads01UI from "./uploads01.presenter";
import { UPLOAD_FILE } from "./uploads01.queries";

export default function Uploads01(props) {
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [imageUrl, setImageUrl] = useState();
  const fileRef = useRef<HTMLInputElement>();

  async function onChangeFile(event) {
    const file = event.target.files[0];
    if (!fileValidation(file)) return;

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file); // 내컴퓨터에서만 사용되는 임시 URL
    fileReader.onload = (data) => {
      setImageUrl(data.target.result);
      props.onChangeFile(file, props.index);
    };

    // const result = await uploadFile({ variables: { file: file } });
    // props.onChangeFile(result.data.uploadFile.url, props.index);
    // console.log(result.data.uploadFile.url);
  }

  function onClickDiv() {
    fileRef.current?.click();
  }

  return (
    <Uploads01UI
      onClickDiv={onClickDiv}
      onChangeFile={onChangeFile}
      fileRef={fileRef}
      imageUrl={imageUrl}
      defaultFile={props.defaultFile}
    />
  );
}
