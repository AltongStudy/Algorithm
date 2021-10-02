
/**
 * 뒤집은 소수
 * 
 */

/**
 * 문제 접근 방법 
 * 
 * 숫자를 문자열로 만들고 배열로 만들어 reverse 함수를 통해 뒤집은 후 
 * 다시 문자열로 붙이고 숫자로 변경하는 함수와
 * 해당 숫자가 수소인지 판단하는 함수 두개를 만들자.
 * 
 */

 function isPrimeNumber(num) {
    if ( num <= 1) {
        return false;
    } else if (num === 2 ) {   
        return true;
    } else {
        for ( let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false
            } 
        }
        return true;
    }
}

function solution(arr) {
    let answer = []
    arr.forEach((a) => {
        const reversed = [...(a + "")].reverse()
        const reversedNum = Number(reversed.join(""));
        if (isPrimeNumber(reversedNum)) {
          answer.push(reversedNum);
        }    
    })
    return answer;
}

const arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];

console.log(solution(arr));
