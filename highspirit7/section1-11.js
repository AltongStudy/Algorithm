function solution(s) {
	const result = s.match(/[A-Z]/g);
	// console.log(result);
	return result?.length ? result.length : 0;
}

let str = 'KoreaTimeGood';
console.log(solution(str));
