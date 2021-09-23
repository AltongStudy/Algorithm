/**
 * 문제 
 * 
 * A, B 두 사람이 가위바위보 게임을 합니다. 총 N번의 게임을 하여 A가 이기면 A를 출력하고, B가 이기면 B를 출력합니다. 비길 경우에는 D를 출력합니다
 * 가위, 바위, 보의 정보는 1:가위, 2:바위, 3:보로 정하겠습니다.
 */

/**
 * 접근 방법
 * 
 * 1. 경기수를 입력 받기 때문에 경기수를 기준으로 반복문을 돌면서 첫번째 배열의 수와 두번째 배열의 수를 비교한다
 * 2. setWinner 라는 숫자를 비교하여 승리자를 return 해주는 승자판독 함수를 따로 만들었다.
 */

function solution(num, personA, personB) {
    const answer = new Array(num);

    const setWinner = (num, num2) => {
        if (
            num === 1 && num2 ===3 || 
            num === 2 && num2 === 1 || 
            num === 3 && num2 === 2) {
            return "A";
        } else if (
            num === 1 && num2 === 2 || 
            num === 2 && num2 === 3 || 
            num === 3 && num2 === 1) {
            return "B";
        } else {
            return "D"
        }
    }

    for (let i = 0; i < num; i++) {
        answer.push(setWinner(personA[i], personB[i]));
    }

    return answer;
}

const numberOfGame = 5;
const personA = [2,3,3,1,3];
const personB = [1,1,2,2,3];

solution(numberOfGame, personA, personB);


/**
 * 아쉬운 점
 * 
 * 강의를 보니 승자를 판독할때 else 에서 B가 승리하는 케이스를 다루었는데 
 * 그렇게 하면 코드를 조금 더 줄일 수 있겠다는 생각이 들었다. 
 */

/**
 * 개선 코드
 */

 function solution(num, personA, personB) {
    const answer = new Array(num);

    const setWinner = (num, num2) => {

        if (num === num2) {
            return "D";
        } else if (
            num === 1 && num2 ===3 || 
            num === 2 && num2 === 1 || 
            num === 3 && num2 === 2) {
            return "A";
        } else {
            return "B"
        }
    }

    for (let i = 0; i < num; i++) {
        answer.push(setWinner(personA[i], personB[i]));
    }

    return answer;
}

const numberOfGame = 5;
const personA = [2,3,3,1,3];
const personB = [1,1,2,2,3];

solution(numberOfGame, personA, personB);