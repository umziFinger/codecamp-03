import { File, Upload } from "./uploads02.styles";

export default function UpLoads02UI(props: any) {
  return (
    <>
      <div>
        {props.defaultFile || props.imageUrl ? (
          <Upload
            src={
              props.imageUrl ||
              `https://storage.googleapis.com/${props.defaultFile}`
            }
            onClick={props.onClickFile}
          />
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
