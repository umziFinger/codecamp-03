export default function HelloLetPage() {//화면에 보여지기위한 export//

    function zzz() {
        document.getElementById("aaa").innerText = "반갑습니다"
    }

    return (
        <button id="aaa" onClick={zzz}>안녕하세요</button>
    )

}