// 숫자 더하기
function sum(num) {
	let count = 0;
	for(let i=0; i <= num; i++){
			count = count + i;
	}
	console.log(count)
}


// 특정 문자열 세기
function countLetter(str) {
	let count = 0;
	for(let i=0; i<str.length; i++){
        if(str[i].includes("a") || str[i].includes("A")){
            count = count + 1
        }
    }
    console.log(count)
}

//문자열 삽입
function makeNumber(num) {
    let string = "1"
    for(let i=2; i <= num; i++){
        string = string + "-"+i
    }
    console.log(string)
}

//홀수 문자열
function makeOdd(num){
    let result = ""
    for(let i=0; i<=num; i++){
        if(i%2 === 1){
            result = result + i
        }
    }
    console.log(result)
}

// 가장 큰 수 찾기
function bigNum(str) {
    let result = 0
    for(let i=0; i <= str.length; i++){
        if(str[i]>result){
            result = str[i]
        }
    }
    console.log(result)
}
