// π¨π»βπ«  κ°μ¬λ νμ΄ 1 π¨π»βπ«

function isPrime(num){
    if(num===1) return false;
    for(let i=2; i<=parseInt(Math.sqrt(num)); i++){
        if(num%i===0) return false
    }
    return true
}
function solution(arr){
    let answer = []
    for(let x of arr){
        let res=0;
        while(x){
            let t = x%10 
            res = res*10+t  
            x = parseInt(x/10); 
        }
        if(isPrime(res)) answer.push(res)
    }

    
    return answer
}
// π¨π»βπ« κ°μ¬λ νμ΄ 2 π¨π»βπ«

function isPrime(num){
    if(num===1) return false;
    for(let i=2; i<parseInt(Math.sqrt(num)); i++){
        if(num%i === 0) return false
    };
    return true;
}
function solution(arr){
    let answer = []

    for(let x of arr){
        let sum = Number(x.toString().split('').reverse().join(''))
        if(isPrime(sum)) answer.push(sum)
    }

    return answer
}

// π‘ λ¬Έμ  νμ΄ π‘

function isPrime(num){
    if(num===1) return false;
    for(let i=2; i<=parseInt(Math.sqrt(num)); i++){
        if(num%i===0) return false
    }
    return true
}

function solution(arr){
    return arr.map(number => parseInt(String(number).split('').reverse().join('')))
    .filter(number => isPrime(number))
}

let numbers = [32, 55, 62, 20, 250, 370, 200, 30, 100]
console.log(solution(numbers));