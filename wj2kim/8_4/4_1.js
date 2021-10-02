
/**
 * 자릿수의 합
 * 
 */

/**
 * 문제 접근 방법 
 * 
 * max 숫자값에 
 * 반복문을 통해 처음으로 들어온 숫자를 문자열로 만들어
 * 문자열을 split("") 이나 spread operator을 통해 배열로 만든다
 * 그리고 그 배열을 돌면서 하나의 숫자로 합한다음 max value 에 집어 넣는다 
 * 동시에 답이 될 수 있기 때문에 max값과 같거나 높다면 원본의 수를 저따로 저장한다.
 * 
 */


function solution(arr) {
    let max = 0;
    let original = 0;

    for (let i = 0; i < arr.length; i++) {
        const a = arr[i].toString().split("");
        const num = a.reduce((acc, val) => (acc += Number(val)), 0);
        if ( num >= max && original < arr[i] ) {
            max = num;
            original = arr[i];
        }
    }

    return original;
}

const arr = [128, 460, 603, 40, 521, 137, 123];

console.log(solution(arr));
