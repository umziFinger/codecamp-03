export default function AuthnumberLetPage() {

    function authnumber(){

        const token = String(Math.floor(Math.random()*1000000)).padStart(6,"0")
        document.getElementById("number").innerText = token

    }

    return (

        <>
            <div id="number">000000</div>
            <button onClick={authnumber}>인증번호전송</button>
        </>

    )

}