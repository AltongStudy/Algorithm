function solution(s) {
	const uniqueWords = [];

	for (let word of s) {
		if (uniqueWords.every((element) => element !== word)) {
			uniqueWords.push(word);
			console.log(word);
		}
	}
}
let str = ['good', 'time', 'good', 'time', 'student', 'game', 'time'];

solution(str);
