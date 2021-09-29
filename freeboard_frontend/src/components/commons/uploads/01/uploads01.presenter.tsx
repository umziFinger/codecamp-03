import { File, MyPhoto, Photo } from "./uploads01.styles";

export default function Uploads01UI(props) {
  return (
    <>
      {props.imageUrls ? (
        <MyPhoto
          src={`https://storage.googleapis.com/${props.imageUrls}`}
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
