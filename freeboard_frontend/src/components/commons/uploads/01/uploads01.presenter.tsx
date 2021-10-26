import { File, MyPhoto, Photo } from "./uploads01.styles";

export default function Uploads01UI(props: any) {
  return (
    <>
      {props.imageUrl || props.defaultFile ? (
        <MyPhoto
          src={
            props.imageUrl ||
            `https://storage.googleapis.com/${props.defaultFile}`
          }
          onClick={props.onClickDiv}
        />
      ) : (
        <Photo onClick={props.onClickDiv}>
          <div>+</div>
          <div>Upload</div>
        </Photo>
      )}
      <File ref={props.fileRef} type="file" onChange={props.onChangeFile} />
    </>
  );
}
