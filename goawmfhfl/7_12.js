// 7-12 마구간정하기
// // 👨🏻‍🏫 강사님 문제 풀이 👨🏻‍🏫

function count(stable,dist) {
    let cnt = 1;
    let endPosition = stable[0];
    for(let i=1; i<stable.length; i++){
        if(stable[i]-endPosition >= dist){
            cnt++;
            endPosition = stable[i];
        }
    }
    return cnt;
}
function solution(stable,horse){
    let answer;
    stable.sort((a,b)=>a-b);
    let lt = 3;
    let rt = stable[stable.length-1]-stable[0];

    while(lt<=rt){
        let mid = parseInt((lt+rt)/2);
        if(count(stable,mid)>=horse){
            answer = mid;
            lt = mid+1;
        }
        else rt = mid-1;
    }
    return answer;
}

const stable = [6,15,24,19,2,12];
const horse = 3;
console.log(solution(stable,horse));