export default function ProductReadUI(props) {

    return(

        <>
            <div>상품상세 화면</div>
            판매자 : <div>{props.data?.fetchProduct.seller}</div>
            제품명 : <div>{props.data?.fetchProduct.name}</div>
            제품정보 : <div>{props.data?.fetchProduct.detail}</div>
            가격 : <div>{props.data?.fetchProduct.price}</div>
            <button onClick={props.onClickMoveToEdit}>수정하기</button>
        </>

    )

}