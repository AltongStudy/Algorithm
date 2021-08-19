/** 
 * 문제
 * 
 * 아홉 개의 줄에 걸쳐 난쟁이들의 키가 주어진다. 주어지는 키는 100을 넘지 않는 자연수이며, 
 * 아홉 난쟁이의 키는 모두 다르며, 가능한 정답이 여러 가지인 경우에는 아무거나 출력한다.
 */

/**
 * 접근 방법
 * 
 * 1. 무조건 7개의 숫자를 출력 
 * 2. 합은 max 100
 * 3. 입력된 순서대로 키를 출력 -> 앞에서 부터 누적해야 함
 * 4. 그렇다면 뒤에서 부터 2개를 빼도 되지 않을까 하는 생각이 들었다
 * 5. 뒤에서 부터 2개의 합 > 총합 - 100 이면 그 둘이 가짜 난쟁이
 * 6. 뒤에서 부터 2개를 빼면 반복도 줄어들 뿐만 아니라 array 자료구조에서 숫자를 제거할때도 더 효율적일 것 같다. 
 * 
 */

const candidates = [20, 7, 23, 19, 10, 15, 25, 8, 13];

function solution(candidates) {
    let answer = [...candidates], total = 0;

    const length = candidates.length -1;

    for( let i = 0; i < length; i++ ) {
        total += candidates[i];
    }
    const targetNum = total - 100; 
    
    loop: for( let i = length; i > 0; i-- ) {
        for ( let j = i - 1; j > 0; j-- ) {
            if (candidates[i] + candidates[j] >= targetNum) {
                answer.splice(i, 1);
                answer.splice(j, 1);
                break loop;
            }
        }
    }

    return answer;
};

console.log(solution(candidates));


/**
 * 아쉬운 점 
 * 
 * spread operator로 candidates를 얕게 복사했는데 이 비용이 얼마나 들지 잘 모르겠다
 * 빈 배열을 선언하고 하나씩 채워가는게 더 효율적일수도 있겠다는 생각도 들었다.
 * for 한번으로 끝내고 싶었는데 무조건 이중 for문을 사용할 수 밖에 없었다. 
 * 이중 for문을 바로 빠져나오는 방법이 label 밖에 생각이 안났다.
 */


/**
 * for fun 
 * 
 * for, for..of, forEach, map, reduce Performance test
 * https://leanylabs.com/blog/js-forEach-map-reduce-vs-for-for_of/
 * https://betterprogramming.pub/which-is-the-fastest-while-for-foreach-for-of-9022902be15e
 * https://levelup.gitconnected.com/which-is-faster-for-for-of-foreach-loops-in-javascript-18dbd9ffbca9
 * https://dzone.com/articles/javascript-performance-vs
 * 
 * while - large set 다룰때 가장 빠름
 * for...of - small data set 에선 성능이 좋으나 large set 에선 나쁨
 * forEach - for...of 랑 비슷함 
 * for - 일반적으로 가장 빠르나 large set 에선 while문 보다 살짝 느린듯?
 * map, reduce - 성능적인 측면에선 그냥저냥이지만 확장성이 좋고 편하고 그리고 코드가 이뻐서 제일 많이 쓰게 됨 
 */