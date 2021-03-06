import CreateProductUI from "./createProduct.presenter";
import { useForm } from "react-hook-form";
import { schema } from "./createProduct.validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import {
  CREATE_USED_ITEM,
  FETCH_USED_ITEM,
  UPDATE_USED_ITEM,
  UPLOAD_FILE,
} from "./createProduct.queries";
import { useRouter } from "next/router";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function CreateProduct(props: any) {
  // const [inputs, setInputs] = useState();
  const router = useRouter();
  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: router.query.useditemId },
  });

  const [createUseditem] = useMutation(CREATE_USED_ITEM);
  const [updateUseditem] = useMutation(UPDATE_USED_ITEM);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const [files, setFiles] = useState([null, null, null]);
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [tags, setTags] = useState([]);

  const { handleSubmit, register, formState, setValue, trigger } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onChangeTags = (event: any) => {
    setTags(event.target.value.split(" "));
  };

  async function onClickSubmit(data: any) {
    console.log({ ...data });

    const uploadFiles = files
      .filter((el) => el)
      .map((el) => uploadFile({ variables: { file: el } }));
    const results = await Promise.all(uploadFiles);
    const imageUrl = results.map((el) => el?.data.uploadFile.url || "");

    const result = await createUseditem({
      variables: {
        createUseditemInput: {
          ...data,
          tags,
          images: imageUrl,
          useditemAddress: {
            lat,
            lng,
          },
        },
      },
    });
    console.log(result);
    router.push(`/market/detail/${result.data?.createUseditem._id}`);
    // setInputs(data);
  }

  async function onClickUpdate(data1: any) {
    const myUpdateUseditemInput: any = {};
    if (data1.name) myUpdateUseditemInput.name = data1.name;
    if (data1.remarks) myUpdateUseditemInput.remarks = data1.remarks;
    if (data1.contents) myUpdateUseditemInput.contents = data1.contents;
    if (data1.price) myUpdateUseditemInput.price = data1.price;

    const uploadFiles = files
      .filter((el) => el)
      .map((el) => uploadFile({ variables: { file: el } }));
    const results = await Promise.all(uploadFiles);
    const nextImages = results.map((el) => el?.data.uploadFile.url || "");
    myUpdateUseditemInput.images = nextImages;

    if (data?.fetchUseditem.images.length) {
      const prevImages = [...data?.fetchUseditem.images];
      myUpdateUseditemInput.images = prevImages.map(
        (el, index) => nextImages[index] || el
      );
    } else {
      myUpdateUseditemInput.images = nextImages;
    }

    updateUseditem({
      variables: {
        updateUseditemInput: myUpdateUseditemInput,
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

  function onChangeContents(value: any) {
    setValue("contents", value === "<p><br></p>" ? "" : value);
    console.log(value);
    trigger("contents");
  }

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=3b50eb6bcb79315da55039f6461203ef";
    document.head.appendChild(script);
    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map"); // ????????? ?????? ????????? DOM ????????????
        const options = {
          // ????????? ????????? ??? ????????? ?????? ??????
          center: new window.kakao.maps.LatLng(33.450701, 126.570667), // ????????? ????????????.
          level: 3, // ????????? ??????(??????, ?????? ??????)
        };
        const map = new window.kakao.maps.Map(container, options); // ?????? ?????? ??? ?????? ??????
        console.log(map);

        const marker = new window.kakao.maps.Marker({
          // ?????? ??????????????? ????????? ???????????????
          position: map.getCenter(),
        });
        // ????????? ????????? ???????????????
        marker.setMap(map);

        // ????????? ?????? ???????????? ???????????????
        // ????????? ???????????? ????????? ??????????????? ????????? ????????? ???????????????
        window.kakao.maps.event.addListener(
          map,
          "click",
          function (mouseEvent: { latLng: any }) {
            // ????????? ??????, ?????? ????????? ???????????????
            const latlng = mouseEvent.latLng;
            console.log(latlng);
            setLat(latlng.getLat());
            setLng(latlng.getLng());
            // ?????? ????????? ????????? ????????? ????????????
            marker.setPosition(latlng);
          }
        );
      });
    };
  }, []);

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
      onChangeTags={onChangeTags}
    />
  );
}
