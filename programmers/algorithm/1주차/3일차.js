function boolean(input1, input2) {

	if(input1===true || input2 ===true) {
		console.log("true")
	}
	else{
		console.log("false")
	}
}
// 018. 조건문 연습

function evenOdd(num){
	if (num === 0) {
		console.log("Zero");
	} else if (num%2 ===1) {
		console.log("Odd");
	} else if (num%2 === 0) {
		console.log("Even");
	}
}
// 019. 홀짝

function temperature(num) {
    if(num <= 18){
        console.log("조금 춥네요");
    }
    else if(num <= 23){
        console.log("날씨가 좋네요");
    }
    else{
        console.log("조금 덥습니다");
    }
}
// 020. 온도

function days(month){
	if (month ===1 || month ===3 || month ===5 ||month ===7 ||month ===8 ||month===10||month===12) {
		console.log("31");
	}else if(month === 4 || month === 6 || month === 9 ||month ===11){
        console.log("30");
    }else {
        console.log("28");
    }
}
// 021. 며칠
