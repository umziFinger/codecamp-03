function solution(arr)
{
    var answer = [];

    for(let i=0; i<arr.length; i++){
        if(arr[i] !== arr[i+1]){
            answer.push(arr[i]);
        }
    }
    console.log(answer)
    
    return answer;
} // 같은 숫자는 싫어

function solution(phone_number) {
    var answer = '';
    
    for(let i=0; i<phone_number.length-4; i++){
        answer = answer + "*"
    }
    
    
    answer = answer + phone_number.slice(phone_number.length-4,phone_number.length)
    
    console.log(answer)
    return answer;
} // 전화번호 가리기