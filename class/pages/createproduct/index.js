import { gql, useMutation } from '@apollo/client'
import {useRouter} from 'next/router'
import { useState } from 'react'
import { Contents1, Contents2, Title, Top, Wrapper } from '../../styles/createproductstyle'

const CREATE_PRODUCT = gql`
    mutation createProduct($seller:String, $createProductInput:CreateProductInput!){
        createProduct(seller:$seller, createProductInput:$createProductInput){
            _id

        }
    }
`

export default function CreateProductPage() {

    const router = useRouter()

    const [name, setName] = useState("")
    const [sum, setSum] = useState("")
    const [detail, setDetail] = useState("")
    const [price, setPrice] = useState("")

    const [createProduct] = useMutation(CREATE_PRODUCT)

    function onChangeName(event) {
        setName(event.target.value)
    }

    function onChangeSum(event) {
        setSum(event.target.value)
    }

    function onChangeDetail(event) {
        setDetail(event.target.value)
    }

    function onChangePrice(event) {
        setPrice(event.target.value)
    }

    async function send() {
        try{
            const result = await createProduct({
                variables: {seller:"판매자", 
                    createProductInput:{
                        name: name,
                        detail: detail,
                        price: Number(price)
                    }
                }
            })
        
            console.log(result);
            console.log(result.data.createProduct._id);
            router.push(`/viewproduct/${result.data.createProduct._id}`)
            alert("등록완료");
        }catch(error){
            console.log("Error")
        }
    }

    return(

        <Wrapper>
            <Title>상품 등록하기</Title>
            <Top>
                <div>
                    상품명<br/><Contents1 type="text" placeholder="상품명을 작성해주세요." onChange={onChangeName} />
                </div>
                <div>
                    한줄요약<br/><Contents1 type="text" placeholder="상품명을 작성해주세요." onChange={onChangeSum}/>
                </div>
                <div>
                    상품설명<br/><Contents2 type="text" placeholder="상품명을 작성해주세요." onChange={onChangeDetail}/>
                </div>
                <div>
                    판매가격<br/><Contents1 type="text" placeholder="판매가격을 작성해주세요." onChange={onChangePrice}/>
                </div>
                <div>
                    태그입력<br/><Contents1 type="text" placeholder="#태그 #태그 #태그"/>
                </div>
            </Top>
            <div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div></div>
            <div>
                <input type="radio" /> 사진1
                <input type="radio" /> 사진2
            </div>
            <button onClick={send}>등록하기</button>
        </Wrapper>

    )

}