/** 
 * 가장 짧은 문자거리
 * 
 */

/**
 * 접근 방법
 * 
 * 문자열에서 제공된 문자를 replace()를 사용하여 '0'으로 교체한다
 * 0을 기준으로 split("")을 한다 
 * 
 * 
 * 가장 처음 문자열과 마지막 문자열이 0으로 바꿔야하는 문자열인지 확인하고 상태를 가지고 있는다
 * 문자를 기준으로 split을 하고 split된 배열을 map 함수를 통해 word 를 distanceCalculator을 실행한다
 * 만약 word의 길이가 1이면 바로 1을 반환하고 아니라면 길이 / 2 를 하여 팔린드롬을 만든다. 
 * 만든 팔린드롬을 문자열로 변환하여 반환한다.
 * 그렇게 만들어진 문자열들을 사이사이 0 을 넣어 합친다
 * 합칠때 만약 가장 처음 문자열이 0으로 시작하는 문자열이 였다면 asnwer에 0 을 먼저 추가한다.
 * 마지막 문자열이 0이였으면 마지막에 0을 추가한다. 
 * *split 할때 빈 문자열이 생길때가 있는데 이럴땐 distanceCalculator에서 null 로 반환하여 합칠때 무시한다.
 */

 function distanceCalculator(word) {
    const length = word.length;
    if (!length) {
      return  null;
    }
    if (length <= 1) {
      return '1'; 
    }

    const distance = [...word].map((char, i) => ( i + 1));
    for(let i = 0; i < Math.floor(length / 2); i++) {
      if (distance[i] !== distance[length-i-1]) {
        distance[length-i-1] = distance[i];
      } 
    }
    return distance.join('');
}

function solution(str, target) {
    let answer = ""
    let start = str[0] === target;
    let end = str[str.length - 1] === target;
  
    const words = str.split('e');
    const distances = words.map((word) => {
      return distanceCalculator(word)
    });
  
    for (let i = 0; i < distances.length; i++) {
      if (i === 0 && !start) {
        answer += !distances[i]? '' : distances[i];
      } else if (i === distances.length - 1 && end) {
        answer += !distances[i]? '' : distances[i];
        answer += "0";
      } else {
        answer += "0";
        answer += !distances[i]? '' : distances[i];
      }
    }
    return answer;
}

const str = 'teachermode';
const target = 'e';

console.log(solution(str, target));