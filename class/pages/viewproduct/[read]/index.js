import { gql, useQuery } from '@apollo/client'
import { useRouter } from 'next/router'

import { Contents1, Contents2, Title, Top, Wrapper } from '../../../styles/viewproductstyle'

const FETCH_PRODUCT = gql`
    query fetchProduct($productId:ID){
        fetchProduct(productId: $productId){
            seller
            name
            detail
            price
        }
    }
`

export default function CreateProductPage() {

    const router = useRouter()
    const {data} = useQuery(FETCH_PRODUCT, {
        variables: {productId: router.query.read}
    })

    return(

        <Wrapper>
            <Title>상품 조회</Title>
            <Top>
                <div>
                    상품명<br/><Contents1>{data ? data.fetchProduct.name: "loading.."}</Contents1>
                </div>
                <div>
                    한줄요약<br/><Contents1></Contents1>
                </div>
                <div>
                    상품설명<br/><Contents2>{data ? data.fetchProduct.detail: "loading.."}</Contents2>
                </div>
                <div>
                    판매가격<br/><Contents1>{data ? data.fetchProduct.price: "loading.."}</Contents1>
                </div>
                <div>
                    태그입력<br/><Contents1></Contents1>
                </div>
            </Top>
        </Wrapper>

    )

}