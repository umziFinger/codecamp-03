import { useState } from "react";
import { useRef } from "react";
import { fileValidation } from "../../../../commons/libraries/validation";
import UpLoads02UI from "./uploads02.presenter";

export default function UpLoads02(props) {
  const fileRef = useRef<HTMLInputElement>();
  const [imageUrl, setImageUrl] = useState("");

  function onChangeFile(event: any) {
    const file = event.target.files[0];
    if (!fileValidation(file)) return;

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (data) => {
      setImageUrl(data.target.result);
      props.onChangeFile(file, props.index);
    };
  }

  function onClickFile() {
    fileRef.current?.click();
  }

  return (
    <UpLoads02UI
      fileRef={fileRef}
      onClickFile={onClickFile}
      onChangeFile={onChangeFile}
      imageUrl={imageUrl}
      register={props.register}
    />
  );
}
