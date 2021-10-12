import { File, Upload } from "./uploads02.styles";

export default function UpLoads02UI(props) {
  return (
    <>
      <div>
        {props.imageUrl ? (
          <Upload src={props.imageUrl} onClick={props.onClickFile} />
        ) : (
          <Upload
            src="/images/upload.png"
            onClick={props.onClickFile}
            {...props.register}
          />
        )}
        <File ref={props.fileRef} type="file" onChange={props.onChangeFile} />
      </div>
    </>
  );
}
