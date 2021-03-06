// π μλκ·Έλ¨ π

/**
 * π¨π»βπ« κ°μ¬λμ λ¬Έμ  νμ΄ 
1.νλμ HashTableμ λ§λ€μ΄μ€λ€.
2. ν΄μ¬νμ΄λΈμ μ λ¬λ°μ λ¬Έμμ΄μ keyμ valueκ°μΌλ‘ κ΅¬λΆνμ¬ μ λ¦¬ν΄μ€λ€.
3. λ λ²μ§Έ forλ¬Έμμλ μ λ¬λ°μ λ λ²μ§Έ μΈμμ λ¬Έμμ΄μ μννλ€.
4. μ΄λ if μ‘°κ±΄λ¬Έμλ hasλ©μλλ₯Ό μ¬μ©νμ¬ λλ²μ§Έ λ¬Έμμ΄μ λ¬Έμκ° ν΄μ¬νμ΄λΈ μμ μλμ§ νμΈνλ€.
5. λ§μ½ μ‘΄μ¬νμ§ μμ κ²½μ° or μμλ κ°μ΄ 0μΌ κ²½μ° Noλ₯Ό λ¦¬ν΄νκ²νλ€. 
6. κ°μ΄ μ‘΄μ¬νλ€λ©΄ μλμ νμ΄λΈμμ valueκ°μ μμμν¨λ€.
 */


// λ΄κ° νμ΄λ³Έ λ¬Έμ 

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

// π¨π»βπ« κ°μ¬λμ λ¬Έμ  νμ΄ 

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