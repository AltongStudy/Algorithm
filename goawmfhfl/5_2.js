// 🔖 학급 회장 🔖

// 📝 학급 회장을 뽑는 문제이다. 후보로 A B C D E 가 있다.
// 1. 반드시 한 명의 학급 회장이 선출되도록 투표결과가 나왔다고 가정한다
// 2. 반 학생들은 이미 반장을 뽑기 위해서 투표용지에 후보의 기호를 적은 후에 선생님께 제출한 상황이다.
// 3. 또한 선생님은 투표용지를 읽으면서 체크하고 있는 상황이다.
// 4. 이때 선생님의 일을 덜기 위해서 학생들이 제출한 기호를 분석하여 학급회장이 선출되는 프로그램을 작성하도록 하시오 !

// 1. new Map을 통해서 새로운 해쉬테이블을 만들어 줍니다.
// 2. for of 문을통해서 전달받은 x의 값이 이미 해쉬테이블에 존재할 경우에 set을 바꿔준다.
// 3. set에서는 기존에 있던 x의 key에다가 새로 할당할 값을 넣어준다.
// 4. 만약 x의 값이 존재하지 않는다면 set을 통해서 key와 value값을 넣어준다.
// 5. for of 문을 통해서 해쉬테이블을 순회한다. 이때 [key, vlaue]를 사용하여 접근한다.
// 6. 최댓값을 구하는 로직을 사용하여 max에 할당하고 그리고 그 조건문에 일치했던 key값을 answer에 할당한다

function solution(arr){
    let answer = '';
    let box = new Map();
    let max = Number.MIN_SAFE_INTEGER;

    for(let x of arr){
        if(box.has(x)) box.set(x,box.get(x)+1)
        else box.set(x,1)
    }
    for(let [key,val] of box){
        if(val>max){
            max=val
            answer=key
        }
    }
    return answer;
}

let votes = 'BACBACCACCBDEDE'
console.log(solution(votes));