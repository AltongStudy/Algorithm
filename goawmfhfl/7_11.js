// 7-11 뮤직비디오
// // 👨🏻‍🏫 강사님 문제 풀이 👨🏻‍🏫

function count(songs,capacity){
    let cnt = 1;
    let sum = 0;
    for(let x of songs){
        if(sum+x>capacity){
            cnt++;
            sum=x;
        }
        else sum += x;
    }
    return cnt;
}
function solution(songs,dvd){
    let answer;
    let lt = Math.max(...songs);
    let rt = songs.reduce((a,b)=>a+b,0);
    while (lt<=rt) {
        let mid = parseInt((lt+rt)/2);
        if(count(songs,mid)<=dvd){
            answer = mid;
            console.log(answer);
            rt = mid-1;
        }
        else lt = mid+1;
    }
    return answer;
}

const songs = [1,2,3,4,5,6,7,8,9];
const dvd = 3;

console.log(solution(songs,dvd));