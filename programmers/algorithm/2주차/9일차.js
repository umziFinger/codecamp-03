function solution(n)
{
    var answer = 0;
    let arr = String(n).split("")
    
    for(let i=0; i<arr.length; i++){
        answer = answer + Number(arr[i])
    }

    return answer;
}   // 자릿수 더하기

function solution(x, n) {
    var answer = [];
    
    for(let i=0; answer.length<n; i++){
        answer.push(x + x*i)
    }
    
    return answer;
} // x만큼 간격이 있는 n개의 숫자

