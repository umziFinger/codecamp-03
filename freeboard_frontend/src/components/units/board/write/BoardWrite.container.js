import { useState, useRef } from "react";

import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import BoardWriteUI from "./BoardWrite.presenter";

import { CREATE_BOARD, UPDATE_BOARD, UPLOAD_FILE } from "./BoardWrite.queries";

export default function BoardWrite(props) {
  const router = useRouter();
  // const fileRef = useRef();

  const [buttonColor, setButtonColor] = useState(false); // 다작성되면 버튼색 바꾸기위한 State

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  // 입력되는 값을 저장해두는 State

  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentError, setContentError] = useState("");
  // 입력된 값이 없으면 에러를 띄우기위한 State

  const [id, setId] = useState("");
  // result.data.createBoard._id를 저장해둔 State

  const [myZipcode, setMyZipcode] = useState("");
  const [myAddress, setMyAddress] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  // 주소찾기 버튼 눌렀을때 창을 띄우고 우편번호와 상세주소를 저장해주는 State

  const [modalVisible, setModalVisible] = useState(false);

  const [createBoard] = useMutation(CREATE_BOARD); //mutation을 사용하기 위한 변수(createBoard)와 위에서 할당한 createBoard를 CREATE_BOARD로 불러옴
  const [updateBoard] = useMutation(UPDATE_BOARD);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const [files, setFiles] = useState([null, null, null]);

  function onChangeName(event) {
    setName(event.target.value);
    if (event.target.value !== "") {
      setNameError("");
    }
    if (
      event.target.value !== "" &&
      password !== "" &&
      title !== "" &&
      content !== ""
    ) {
      setButtonColor(true);
    } else {
      setButtonColor(false);
    }
  } // 작성자가 입력되었을때 State에 값을 저장해주고 값이 없다면 에러띄우는 함수

  function onChangePassword(event) {
    setPassword(event.target.value);
    if (event.target.value !== "") {
      setPasswordError("");
    }
    if (
      name !== "" &&
      event.target.value !== "" &&
      title !== "" &&
      content !== ""
    ) {
      setButtonColor(true);
    } else {
      setButtonColor(false);
    }
  } // 비밀번호가 입력되었을때 State에 값을 저장해주고 값이 없다면 에러띄우는 함수

  function onChangeTitle(event) {
    setTitle(event.target.value);
    if (event.target.value !== "") {
      setTitleError("");
    }
    if (
      name !== "" &&
      password !== "" &&
      event.target.value !== "" &&
      content !== ""
    ) {
      setButtonColor(true);
    } else {
      setButtonColor(false);
    }
  } // 제목이 입력되었을때 State에 값을 저장해주고 값이 없다면 에러띄우는 함수

  function onChangeContent(event) {
    setContent(event.target.value);
    if (event.target.value !== "") {
      setContentError("");
    }
    if (
      name !== "" &&
      password !== "" &&
      title !== "" &&
      event.target.value !== ""
    ) {
      setButtonColor(true);
    } else {
      setButtonColor(false);
    }
  } // 내용이 입력되었을때 State에 값을 저장해주고 값이 없다면 에러띄우는 함수

  function onChangeYoutubeUrl(event) {
    setYoutubeUrl(event.target.value);
  } // 유튜브 링크가 입력되었을때 State에 저장해주는 함수

  function onChangeAddressDetail(event) {
    setAddressDetail(event.target.value);
  }

  async function check() {
    if (props.isEdit) {
      if (name === "") {
        setNameError("작성자를 입력해주세요.");
      }

      if (password === "") {
        setPasswordError("비밀번호를 입력해주세요.");
      }

      if (title === "") {
        setTitleError("제목을 입력해주세요.");
      }

      if (content === "") {
        setContentError("내용을 입력해주세요.");
      }
      // isEdit이 true일때, 즉 수정창에서 수정하기 버튼을 눌렀을때 빈칸이 없는지 확인하는 함수
      if (name !== "" && password !== "" && title !== "" && content !== "") {
        try {
          const myVariables = {
            updateBoardInput: { boardAddress: {} },
            boardId: router.query.boardId,
          };
          if (title) myVariables.updateBoardInput.title = title;
          if (content) myVariables.updateBoardInput.contents = content;
          if (password) myVariables.password = password;
          if (youtubeUrl) myVariables.updateBoardInput.youtubeUrl = youtubeUrl;
          if (myZipcode)
            myVariables.updateBoardInput.boardAddress.zipcode = myZipcode;
          if (myAddress)
            myVariables.updateBoardInput.boardAddress.address = myAddress;
          if (addressDetail)
            myVariables.updateBoardInput.boardAddress.addressDetail =
              addressDetail;

          await updateBoard({
            variables: myVariables,
          });
          setModalVisible((prev) => !prev);
        } catch (err) {
          alert(err.message);
        } //수정하기
      }
    } else {
      // isEdit이 false일때, 즉 등록창에서 등록버튼을 눌렀을때 빈칸없는지 확인하는 함수
      if (name === "") {
        setNameError("작성자를 입력해주세요.");
      }

      if (password === "") {
        setPasswordError("비밀번호를 입력해주세요.");
      }

      if (title === "") {
        setTitleError("제목을 입력해주세요.");
      }

      if (content === "") {
        setContentError("내용을 입력해주세요.");
      }
      if (name !== "" && password !== "" && title !== "" && content !== "") {
        try {
          const uploadFiles = files
            .filter((el) => el)
            .map((el) => uploadFile({ variables: { file: el } }));
          const results = await Promise.all(uploadFiles);
          const imageUrl = results.map((el) => el.data.uploadFile.url);

          const result = await createBoard({
            variables: {
              createBoardInput: {
                writer: name,
                password: password,
                title: title,
                contents: content, // key와 value가 같으면 생략가능 ex) writer: writer, >>> writer,
                youtubeUrl: youtubeUrl,
                boardAddress: {
                  zipcode: myZipcode,
                  address: myAddress,
                  addressDetail: addressDetail,
                },
                images: [...imageUrl],
              },
            },
          });

          console.log(result.data.createBoard._id);
          setId(result.data.createBoard._id);
          setModalVisible((prev) => !prev); // modal창 띄우기
          //이자리에서 router.push를 해주면 modal창이 보이기 전에 넘어가버림 //그래서 router.push를 밑으로 내림
        } catch (error) {
          console.log(error.message);
        }
      }
    }
  }

  function onClickCancle() {
    router.push(`/boards/viewboard/${router.query.boardId}`);
  } // 수정창에서 취소하기 누르면 기존 상세페이지로 돌아가기

  const handleComplete = (data) => {
    setMyZipcode(data.zonecode);
    setMyAddress(data.address);
    console.log(data.zonecode);
    console.log(data.address);

    setIsOpen((prev) => !prev);
  }; // 주소창에서 선택했을때 State에 우편번호와 상세주소를 저장하고 console창에 띄우기

  function onToggleZipcode() {
    setIsOpen((prev) => !prev);
  } // prev => !prev는 이전값의 반대값으로 바꿔주는 state속성

  function closeModal() {
    setModalVisible((prev) => !prev);
    {
      props.isEdit
        ? router.push(`/boards/viewboard/${router.query.boardId}`)
        : router.push(`/boards/viewboard/${id}`); // modal창에서 ok혹은 cancel눌렀을때 router.push 진행
    } //
  }

  function onChangeFile(file, index) {
    const newFiles = [...files];
    newFiles[index] = file;
    setFiles(newFiles);
  }

  // async function onChangeFile(event) {
  //   const myFile = event.target.files[0];
  //   console.log(myFile);

  //   if (!myFile) {
  //     alert("파일이 없습니다");
  //     return;
  //   }

  //   if (myFile.size > 5 * 1024 * 1024) {
  //     alert("파일 용량이 너무 큽니다");
  //     return;
  //   }

  //   if (myFile.size > 5 * 1024 * 1024) {
  //     alert("파일 용량이 너무 큽니다");
  //     return;
  //   }

  //   if (!myFile.type.includes("jpeg") && !myFile.type.includes("png")) {
  //     alert("jpeg 또는 png만 업로드 가능합니다");
  //     return;
  //   }

  //   const result = await uploadFile({
  //     variables: {
  //       file: myFile,
  //     },
  //   });
  //   console.log(result.data.uploadFile.url);
  //   setImageUrl(imageUrl.concat([result.data.uploadFile.url]));
  // }
  // console.log(imageUrl);

  // function onClickDiv() {
  //   fileRef.current?.click();
  // }
  return (
    <BoardWriteUI
      onChangeName={onChangeName}
      onChangePassword={onChangePassword}
      onChangeTitle={onChangeTitle}
      onChangeContent={onChangeContent}
      nameError={nameError}
      passwordError={passwordError}
      titleError={titleError}
      contentError={contentError}
      check={check}
      buttonColor={buttonColor}
      isEdit={props.isEdit}
      onClickCancle={onClickCancle}
      data={props.data}
      onChangeYoutubeUrl={onChangeYoutubeUrl}
      isOpen={isOpen}
      handleComplete={handleComplete}
      onToggleZipcode={onToggleZipcode}
      myZipcode={myZipcode}
      myAddress={myAddress}
      modalVisible={modalVisible}
      closeModal={closeModal}
      onChangeAddressDetail={onChangeAddressDetail}
      onChangeFile={onChangeFile}
    />
  );
}
