function solution(num) {
    var answer = '';
    
    if(num%2 === 0){
        return answer = "Even";    
    }else{
        return answer = "Odd"
    }
       
}   // 짝수, 홀수

function solution(arr) {
    var answer = 0;
    let sum = 0;
    
    for(let i=0; i<arr.length; i++){
         sum = sum + arr[i]
    }
    answer = sum/arr.length
    
    return answer;
}  // 평균 구하기

function solution(s) {
    var answer = '';
    
    if(s.length%2===1){
        answer = s[Math.floor(s.length/2)]
    }else{
        answer = s.slice((s.length/2)-1,(s.length/2)+1)
    }
    
    return answer;
}  // 가운데 글자 가져오기

function solution(seoul) {
    var answer = '';
    
    for(let i=0; i<seoul.length; i++){
        if(seoul[i] === "Kim"){
            answer = "김서방은 "+i+"에 있다"
        }
    }
    return answer;
    
}   // 서울에서 김서방 찾기