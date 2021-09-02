import { useMutation, gql } from "@apollo/client"
import { useState } from "react"

const CREATE_PRODUCT = gql`
    mutation createProduct($seller: String, $createProductInput: CreateProductInput!){
        createProduct(
            seller:$seller,
            createProductInput:$createProductInput
            
        ){
            _id
            message
            number
        }
    }
`

export default function GraphqlMutationProductPage(){



    const [createProduct] = useMutation(CREATE_PRODUCT)

    const [mySeller, setMySeller] = useState("")
    const [myName, setMyName] = useState("")
    const [myDetail, setMyDetail] = useState("")
    const [myPrice, setMyPrice] = useState("")

    async function onClickSubmit(){
        const result = await createProduct({
            variables: {
                seller: mySeller, 
                createProductInput: {
                    name: myName,
                    detail: myDetail,
                    price: Number(myPrice)
                }
            }
        })
        console.log(result.data.createProduct._id)
    }

    function onChangeSeller(event){
        setMySeller(event.target.value)
    }

    function onChangeName(event){
        setMyName(event.target.value)
    }

    function onChangeDetail(event){
        setMyDetail(event.target.value)
    }

    function onChangePrice(event){
        setMyPrice(event.target.value)
    }

    return(
        <>
            판매자: <input type="text" onChange={onChangeSeller}/><br/>
            상품명: <input type="text" onChange={onChangeName}/><br/>
            상품상세: <input type="text" onChange={onChangeDetail} /><br/>
            상품가격: <input type="text" onChange={onChangePrice} /><br/>
            <button onClick={onClickSubmit}>상품 등록하기</button>
        </>
    )


}