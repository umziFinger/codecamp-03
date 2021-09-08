import ProductReadUI from "./ProductRead.presenter"
import {useRouter} from 'next/router'
import {useQuery} from '@apollo/client'
import { FETCH_PRODUCT } from "./ProductRead.queries"

export default function ProductRead() {

    const router = useRouter()
    
    const {data} = useQuery(FETCH_PRODUCT, {
        variables:{productId: router.query.productId}
    })

    function onClickMoveToEdit() {

        router.push(`/quiz/08-product/product-detail/${router.query.productId}/edit`)

    }

    return(
        <ProductReadUI
            data={data}
            onClickMoveToEdit={onClickMoveToEdit}
        />
    )

}