function grade(score) {
	let result = "";
    if(score<=100 && score>=90){
        result = "A";
    }else if(score<=89 && score>=80){
        result = "B"
    }else if(score<=79 && score>=70){
        result = "C"
    }else if(score<=69 && score>=60){
        result = "D"
    }else if(score<=59 && score>=0){
        result = "F"
    }else{result = "잘못된 점수입니다."}
    console.log(result)
	
} // 점수에 따른 등급


const myShopping = [
    { category: "과일", price: 12000　},
    { category: "의류", price:10000　 },
    { category: "의류", price: 20000　},
    { category: "장난감", price: 9000 },
    { category: "과일", price: 5000　 },
    { category: "의류", price: 10000  },
    { category: "과일", price: 8000　　},
    { category: "의류", price: 7000　　},
    { category: "장난감", price: 5000  },
    { category: "의류", price: 10000　 },
]


let count = 0;
let price = 0;
let grade = "";

for(let i=0; i<myShopping.length; i++){
if(myShopping[i].category === "의류"){
    count++
    price = price + myShopping[i].price

    if(count>=0 && count<=2){
        grade = "Bronze"
    }
    else if(count>=3 && count<=4){
        grade = "silver"
    }
    else if(count >=5){
        grade = "Gold"
    }
}
}

console.log("횟수는 총" + count +"회 금액은" + price + "원이며 등급은")
// 마이페이지 반복문