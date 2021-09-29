import { useMutation } from "@apollo/client";
import { useRef } from "react";
import { fileValidation } from "../../../../commons/libraries/validation";
import Uploads01UI from "./uploads01.presenter";
import { UPLOAD_FILE } from "./uploads01.queries";

export default function Uploads01(props) {
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const fileRef = useRef<HTMLInputElement>();

  async function onChangeFile(event) {
    const myFile = event.target.files[0];
    console.log(myFile);

    if (!fileValidation(myFile)) return;

    const result = await uploadFile({ variables: { file: myFile } });
    props.onChangeFile(result.data.uploadFile.url, props.index);
    console.log(result.data.uploadFile.url);
  }

  function onClickDiv() {
    fileRef.current?.click();
  }

  return (
    <Uploads01UI
      onClickDiv={onClickDiv}
      onChangeFile={onChangeFile}
      imageUrls={props.imageUrls}
      fileRef={fileRef}
    />
  );
}
