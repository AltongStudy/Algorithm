// 💡 강사님 문제 풀이 💡
function solution(n,k,cards){
    let answer;
    let tmp = new Set()
    for(let i=0; i<n; i++){
        for(let j=i+1; j<n; j++){
            for(let k=j+1; k<n; k++){
                tmp.add(cards[i]+cards[j]+cards[k])
            }
        }
    }
    let makeArray = Array.from(tmp).sort((a,b)=> b-a)
    return answer = makeArray[k-1]
}
let cardNumber = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42]
console.log(solution(10,3,cardNumber));