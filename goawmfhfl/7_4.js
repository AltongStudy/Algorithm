// ✅ 7-4 삽입정렬

// 🧑🏻‍💻 다른 문제 풀이 🧑🏻‍💻
function solution(arr) {
    let answer = arr;
  
    for (let i = 1; i < answer.length; i++) {
      for (let j = i; j >= 0; j--) {
        if (answer[j-1] > answer[j]) [answer[j-1], answer[j]] = [answer[j], answer[j-1]];
        else break;
      }
    }
    return answer;
  }
  
  let arr = [11, 7, 5, 6, 10, 9];
  console.log(solution(arr));
  
  // 👨🏻‍🏫 강사님 문제 풀이 👨🏻‍🏫
  function solution(arr) {
      let answer = arr
      for(let i=1; i<arr.length; i++){
          let tmp = arr[i];
          let j;
          for(j=i-1; j>=0; j--){
              if(arr[j]>tmp) arr[j+1]=arr[j]
              else break;
          }
          arr[j+1]=tmp
      }
      return answer
  }
  
  
  let arr = [11,7,5,6,10,9]
  console.log(solution(arr));
