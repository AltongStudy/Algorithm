/**
 * 문제 
 * 
 * 등수 구하기 
 */

/**
 * 접근 방법 
 * 
 * answer array 를 주어진 보기의 배열 길이만큼 1로 초기화 한다.
 * 이중포문을 사용하여 반복을 통해 자신과 나머지를 비교하여 자신보다 큰 값이 있을때마다 + 1을 해준다. 
 */

 function solution(arr) {
    let answer = new Array(arr.length).fill(1);
    
    for (let i = 0; i < arr.length; i ++) {
      for(let j = 0; j < arr.length; j++) {
        if (arr[j] > arr[i]) {
          answer[i]++;
        }
      }
    }
    
    return answer;
  }; 
    
  
  const arr = [87, 89, 92, 100, 76];
  
  solution(arr);