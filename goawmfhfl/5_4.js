/*
๐ ๋ชจ๋  ์๋ ๊ทธ๋จ ๐

 * 1. S๋ฌธ์์ด์์ T๋ฌธ์์ด๊ณผ ์๋๊ทธ๋จ์ด ๋๋ S์ ๋ถ๋ถ๋ฌธ์์ด ๊ฐ์๋ฅผ ๊ตฌํด๋ผ.
 * 2. ๋ถ๋ถ ๋ฌธ์์ด์ด ํต์ฌ์ด๋ค.
 * 3. ์ฆ T๋ฌธ์์ด์ด S๋ฌธ์์ด์ ์ํํ๋ค. T๋ฌธ์์ด์ abc์ ํํ๋ฅผ ์ ์งํ๋ค
 * 4. abc๋ ์ฐจ๋ก๋๋ก ์ํํ๋ฉด์ ์๋๊ทธ๋จ์ด ๋๋ ๋ถ๋ถ์ด ์๋์ง ํ์ธํ๋ค.
 * 5. ๋ง์ฝ ์๋๊ทธ๋จ ์กฐ๊ฑด์ด ์ผ์นํ๋ฉด ์นด์ดํํ๋ค.
 */

/**
1. th, sh ๋ชจ๋ ํด์ฌ ํ์ด๋ธ์ ๋ง๋ค์ด์ค๋ค.
2. ์ฒซ ๋ฒ์งธ for๋ฌธ์ ํตํด์ tH์ t๋ฌธ์์ด๋ก ๊ตฌ์ฑ์ด ๋ ํ์ด๋ธ์ ๋ง๋ค์ด์ค๋ค.
3. ๋ ๋ฒ์งธ for๋ฌธ์ ํตํด์ sH์ t๋ฌธ์์ด์ ๊ธธ์ด๊ฐ -1 ๋งํผ์ ํ์ด๋ธ์ ๋ง๋ค์ด์ค๋ค.
4. ํฌ ํฌ์ธํฐ ์๊ณ ๋ฆฌ์ฆ์ ์ฌ์ฉํ๋ค. lt = 0  rt = t๋ฌธ์์ด์ ๊ธธ์ด๊ฐ - 1
6. ์ธ ๋ฒ์งธ for๋ฌธ์์๋ ํฌ ํฌ์ธํฐ ์๊ณ ๋ฆฌ์ฆ์ ์ง์ ์ ์ผ๋ก ์ฌ์ฉํ๋ค.
5. ํฌ ํฌ์ธํฐ ์๊ณ ๋ฆฌ์ฆ์ ์ฌ์ฉํ๊ธฐ ์ํด sHํ์ด๋ธ์ ์๋ ๊ฐ์ ์ ๋์ ์ผ๋ก ๋ณ๊ฒฝ์์ผ์ค๋ค.
6. add -> compare -> delete ์์ผ๋ก ์งํ
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


// ๐จ๐ปโ๐ซ ๊ฐ์ฌ๋์ ๋ ๋ค๋ฅธ ๋ฌธ์ ํ์ด O(n) ๐จ๐ปโ๐ซ

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