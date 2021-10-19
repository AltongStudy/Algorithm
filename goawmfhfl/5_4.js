/*
🔖 모든 아나 그램 🔖

 * 1. S문자열에서 T문자열과 아나그램이 되는 S의 부분문자열 개수를 구해라.
 * 2. 부분 문자열이 핵심이다.
 * 3. 즉 T문자열이 S문자열을 순회한다. T문자열은 abc의 형태를 유지한다
 * 4. abc는 차례대로 순회하면서 아나그램이 되는 부분이 있는지 확인한다.
 * 5. 만약 아나그램 조건이 일치하면 카운팅한다.
 */

/**
1. th, sh 모두 해쉬 테이블을 만들어준다.
2. 첫 번째 for문을 통해서 tH에 t문자열로 구성이 된 테이블을 만들어준다.
3. 두 번째 for문을 통해서 sH에 t문자열의 길이값 -1 만큼의 테이블을 만들어준다.
4. 투 포인터 알고리즘을 사용한다. lt = 0  rt = t문자열의 길이값 - 1
6. 세 번째 for문에서는 투 포인터 알고리즘을 직접적으로 사용한다.
5. 투 포인터 알고리즘을 사용하기 위해 sH테이블에 있는 값을 유동적으로 변경시켜준다.
6. add -> compare -> delete 순으로 진행
 */

function compareMap(aMap,bMap){
    if(aMap.size !== bMap.size) return false
    for(let [key,val] of aMap){
        if(!bMap.has(key)||bMap.get(key)!==val) return false
    }
    return true
}
function solution(a,b){
    let answer = 0;
    let aMap = new Map()
    let bMap = new Map()

    for(let x of b){
        if(bMap.has(x)) bMap.set(x,bMap.get(x)+1)
        else bMap.set(x,1)
    }

    let len = b.length - 1
    for(let i = 0; i<len; i++){
        if(aMap.has(a[i]))aMap.set(a[i],aMap.get(a[i])+1)
        else aMap.set(a[i],1)
    }

    let lt = 0;
    for(let rt=len; rt<a.length; rt++){
        if(aMap.has(a[rt])) aMap.set(a[rt],aMap.get(a[rt])+1)
        else aMap.set(a[rt],1)
        if(compareMap(aMap,bMap)) answer++
        aMap.set(a[lt],aMap.get(a[lt])-1)
        if(aMap.get(a[lt]) === 0) aMap.delete(a[lt])
        lt++
    }
    return answer;
}


let a = "bacaAacba"
let b = 'abc'
console.log(solution(a,b));


// 👨🏻‍🏫 강사님의 또 다른 문제풀이 O(n) 👨🏻‍🏫

function solution(s, t){
    let answer=0;
    let sH = new Map();
    for(let x of t){
        sH.set(x, (sH.get(x) || 0)-1);
    }
    let len=t.length-1;
    for(let i=0; i<len; i++){
        sH.set(s[i], (sH.get(s[i]) || 0)+1);
        if(sH.get(s[i])===0) sH.delete(s[i]);
    }
    let lt=0;
    for(let rt=len; rt<s.length; rt++){
        sH.set(s[rt], (sH.get(s[rt]) || 0)+1);
        if(sH.get(s[rt])===0) sH.delete(s[rt]);
        if(sH.size===0) answer++;
        sH.set(s[lt], (sH.get(s[lt]) || 0)-1);
        if(sH.get(s[lt])===0) sH.delete(s[lt]);
        lt++;
    }
    return answer;
}
console.log(solution("bacacbcba", "abc"));