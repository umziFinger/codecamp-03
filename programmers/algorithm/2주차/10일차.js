function solution(s) {
    var answer = '';
    let arr = s.split("")
    
    arr = arr.reverse(arr.sort())
    
    answer = arr.join("")
    
    return answer;
} // 문자열 내림차순으로 배치하기


function solution(array, commands) {
    var answer = [];
    
    for(let i=0; i<commands.length; i++){
    
        answer.push(((array.slice(((commands[i])[0])-1,(commands[i])[1])).sort((a,b) => a - b))[((commands[i])[2])-1])
    }
    
    return answer;
} //K번째 수_1

function solution(array, commands) {
    
    return commands.map((el)=>{
        return array.slice(el[0]-1,el[1]).sort((a,b)=>a-b)[el[2]-1]

    })
} //k번째 수_2