const name = "최권준"
//001. 선언과 할당


let name = "영희"
name = "철수"
// 재할당 


let fruits = []

fruits = ["사과", "바나나", "파인애플"]

let newFruits = []

newFruits.push(fruits[fruits.length-1])
// 003. 배열의 선언과 할당, 004. 배열의 기능 


let students = ["철수", "영희", "훈이", "짱구", "유리"]

let newArr = []

newArr.push(students.slice(0,3))
// 005. 배열의 기능


let fruits = ["사과", "바나나"]

fruits[0] = "맛있는" + fruits[0]
fruits[1] = "맛있는" + fruits[1]
// 006. 배열의 기능


const number = "01012345678"

let arr = []

arr.push(number.slice(0,3), number.slice(3,7), number.slice(7,11))
// 007. 문자열 배열


let student = {};

student = {name : "철수"}

// 008. 객체의 선언과 할당


const student = {
	name: "철수",
	age: 8,
};


const school = {
	name: "다람쥐초등학교",
	teacher: "다람이",
}

student.school = school
// 009. 객체의 키&값 추가


let student = {
	name: "철수",
	age: 8,
	drink: "사이다"
};

delete student.drink
// 010. 객체의 키&값 삭제

const classmates = [
	{
		name: "철수",
		age: 8,
		school: "다람쥐초등학교"
	},
	{
		name: "영희",
		age: 8,
		school: "토끼초등학교"
	},
	{
		name: "짱구",
		age: 8,
		school: "다람쥐초등학교"
	}
];


classmates[1].school = "다람쥐초등학교"
// 011. 객체와 배열의 값