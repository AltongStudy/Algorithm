// 🔖 아나그램 🔖

/**
 * 👨🏻‍🏫 강사님의 문제 풀이 
1.하나의 HashTable을 만들어준다.
2. 해쉬테이블에 전달받은 문자열을 key와 value값으로 구분하여 정리해준다.
3. 두 번째 for문에서는 전달받은 두 번째 인수의 문자열을 순회한다.
4. 이때 if 조건문에는 has메서드를 사용하여 두번째 문자열의 문자가 해쉬테이블 안에 있는지 확인한다.
5. 만약 존재하지 않을 경우 or 상쇄된 값이 0일 경우 No를 리턴하게한다. 
6. 값이 존재한다면 원래의 테이블에서 value값을 상쇄시킨다.
 */


// 내가 풀어본 문제

function solution(a,b){
    let answer = "YES";
    let aHash = new Map()

    for(let x of a){
        if(aHash.has(x))aHash.set(x,aHash.get(x)+1)
        else aHash.set(x,1)
    }

    for(let i = 0; i<b.length; i++){
        if(aHash.has(b[i])) aHash.set(b[i],aHash.get(b[i])-1)
        else return "No"
        if(aHash.get(b[i])<0) return "NO"
    }
    return answer
}

// 👨🏻‍🏫 강사님의 문제 풀이 

function solution(str1,str2){
    let answer = "YES"
    let sH = new Map()

    for(let x of str1){
        if(sH.has(x))sH.set(x,sH.get(x)+1)
        else sH.set(x,1)
    }

    for (let x of str2){
        if(!sH.has(x)||sH.get(x)===0) return "NO"
        else sH.set(x,sH.get(x)-1)
    }
    return answer;
}

let a = "AbaAeCe"
let b = "baeeACA"
console.log(solution(a,b));