function solution(s) {
	let answer,
		maxLength = 0;

	for (let str of s) {
		if (str.length > maxLength) {
			maxLength = str.length;
			answer = str;
		}
	}
	// console.log(maxLength);

	return answer;
}
let str = ['teacher', 'time', 'student', 'beautiful', 'good'];
console.log(solution(str));
