
// function solution(a, b, c){
//     console.log(arguments)
//     let min = a < b ? a : b

//     return c < min ? c : min
// }

function solution(...rest){ //...arguments
    console.log(rest)
	return Math.min(...rest)
}

console.log(solution(6, 5, 11))
console.log(solution(2, 5, 1))