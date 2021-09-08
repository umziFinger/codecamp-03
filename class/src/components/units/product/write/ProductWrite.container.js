import ProductWriteUI from "./ProductWrite.presenter"
import {useMutation} from '@apollo/client'
import {useRouter} from 'next/router'

import { CREATE_PRODUCT, UPDATE_PRODUCT } from "./ProductWrite.queries"
import { useState } from "react"

export default function ProductWrite(props) {

    const router = useRouter()
    const [createProduct] = useMutation(CREATE_PRODUCT)
    const [updateProduct] = useMutation(UPDATE_PRODUCT)

    const [seller, setSeller] = useState("")
    const [name, setName] = useState("")
    const [detail, setDetail] = useState("")
    const [price, setPrice] = useState("")

    function onChangeSeller(event) {
        setSeller(event.target.value)
    }

    function onChangeName(event) {
        setName(event.target.value)
    }

    function onChangeDetail(event) {
        setDetail(event.target.value)
    }

    function onChangePrice(event) {
        setPrice(event.target.value)
    }

    async function onClickSubmit() {

        if(props.isEdit){
            await updateProduct({
                variables:{productId:router.query.productId, updateProductInput:{
                    name:name,
                    detail:detail,
                    price:Number(price)
                }}
            })

            router.push(`/quiz/08-product/product-detail/${router.query.productId}`)
        }else{
            const result = await createProduct({
                variables:{seller:seller, createProductInput:{
                    name:name,
                    detail:detail,
                    price:Number(price)
                }}
            })

            router.push(`/quiz/08-product/product-detail/${result.data.createProduct._id}`)
        }
    }

    return(
        <ProductWriteUI
            onChangeDetail={onChangeDetail}
            onChangeName={onChangeName}
            onChangePrice={onChangePrice}
            onChangeSeller={onChangeSeller}
            onClickSubmit={onClickSubmit}
            isEdit={props.isEdit}
        />
    )

}