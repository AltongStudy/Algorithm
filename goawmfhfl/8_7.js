// 최대점수 구하기 (이진트리 DFS)

function solution(arr,time) {
    let answer = Number.MIN_SAFE_INTEGER;
    let ps = [];
    let pt = [];
    let n = arr.length;
    for(let x of arr){
      ps.push(x[0]),
      pt.push(x[1])
    };
  
    function DFS(L,sum,t) {
      if(t>time) return;
      if(L===n){
        if(t===time) answer = Math.max(sum,answer);
      }
      else{
        DFS(L+1,sum+ps[L],t+pt[L]);
        DFS(L+1,sum,t);
      }
    };
  
    DFS(0,0,0);
    return answer;
  }
  
  let arr = [[10,5],[25,12],[15,8],[6,3],[7,4]]
  console.log(solution(arr,20));