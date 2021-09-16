// ✅ 7-6 장난꾸러기 현수
// 🌟 문제 풀이 🌟
function solution(arr) {
    let answer=[];
    let sortedArr=[...arr]
				.sort((a,b)=>a-b)
				.forEach((v,i)=>{
					arr[i]!==v ? answer.push(i+1) : '';
				})
    return answer;
}
let arr = [120,125,152,130,135,135,143,127,160];
console.log(solution(arr));