import axios from "axios"

export default function RestApiPage() {

    async function requestApi(){

        const result = await axios.get('https://koreanjson.com/users')
        console.log(result)

    }

    return(

        <button onClick={requestApi}>REST-API 요청하기</button>

    )

}