import {useState} from 'react'

export default function AuthnumberStatePage () {

    const [number, setNumber] = useState("000000")

    function sendauth() {
        
        const token = String(Math.floor(Math.random()*1000000)).padStart(6,"0")
        setNumber(token)

    }



    return(

        <>
            <div>{number}</div>
            <button onClick={sendauth}>인증번호전송</button>
        </>

    )

}