export default function  TypescriptPage() {

    // 문자타입 - 타입추론
    let aaa = "안녕하세요"

    aaa = 3

    // 문자타입
    let bbb: string;

    bbb = 123

    //숫자타입
    let ccc = 5;

    let ddd: number;

    ccc = "112"

    ddd = "123"

    //배열타입

    let eee: number[] = [1,2,3,4,5]
    let fff: (number | string)[] = ["1",2,3,4,5]
    let ggg: (number[]|string[]) = [1,2,3,4,5,6]

    // 객체타입
    interface IProfile {
        school:String
        age:object
    }

    let profile: IProfile = {
        school: "다람쥐초등학교",
        age:{출생:2000}
    }

    profile.age = 15

    

    return(

        <div>타입스크립트 페이지입니다.</div>

    )

}