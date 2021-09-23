/** 
 * 숫자만 추출
 * 
 */

/**
 * 접근 방법
 * 
 * 1. 정규표현식을 사용해 해당 문자열에서 문자는 반칸으로 replace 처리 한다.
 * 2. 문자열의 가장 앞부분이 0 이면 제거하고 아니면 그대로 넘버로 형변환을 시킨다 
 */

 function solution(str) {
    const onlyNum = str.replace(/[a-z,A-Z]/g, '');

    let numIterator = onlyNum[Symbol.iterator]();
    let next = numIterator.next();

    let stop = false;

    while(!stop) {
        if (next.value === '0') {
            onlyNum.replace(onlyNum[0], '');
            next = numIterator.next();
        } else if ( next.done === true) {
            stop = true;
        } else {
            stop = true;
        }
    }
    numIterator = null;
    return Number(onlyNum);
}

const str = 'g0en2T0s8eSoft'

console.log(solution(str));

/**
 * 
 *  강의를 보고 난 후 
 * 
 *  isNan(x)을 실제 이렇게 사용할 수 있도 있구나 
 *  answer * 10 + Number(x) -> 숫자 0을 
 * 
 */

 function solution(str) {
    let answer = 0;
    for(let x of str) {
        if(!isNaN(x)) {
            answer=answer * 10 + Number(x);
        }
    }
    return answer;
}

const str = 'g0en2T0s8eSoft'

console.log(solution(str));
