export default function ProductWriteUI(props) {

    return(
        <>
            <div>{props.isEdit ? "상품수정화면" : "상품등록화면"}</div>
            판매자 :<input type="text" onChange={props.onChangeSeller}/>
            제품명 :<input type="text" onChange={props.onChangeName}/>
            상세설명 :<input type="text" onChange={props.onChangeDetail}/>
            가격 :<input type="text" onChange={props.onChangePrice}/>
            <button onClick={props.onClickSubmit}>{props.isEdit ? "상품수정" : "상품등록"}</button>
        </>
    )

}