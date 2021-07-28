function solution(arr) {
	const sum = arr.reduce(function add(acc, cur) {
		return acc + cur;
	}, 0);
	console.log(`total sum is ${sum}`);
	let answer = arr;

	// 정답에서는 루프 인덱스 범위를 arr.length보다 하나 작은 숫자로 두었다.
	// 그래서 i가 8일 때 for문 자체가 돌지는 않지만, 내 경우엔 돌게 된다.
	// 그래도 어차피 내부 for문은 안 돌아서 사실 별 차이는 없다.
	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			console.log(`${arr[i]}, ${arr[j]}`);
			if (sum - arr[i] - arr[j] === 100) {
				// console.log(`${i}, ${j}`);
				answer.splice(i, 1);
				answer.splice(j - 1, 1);
				break;
			}
		}
	}

	return answer;
}

// 같은 키의 난쟁이가 있을 때 문제가 있지만, 문제에서 아홉 난쟁이의 키는 모두 다르다고 기술되어 있다.
let arr = [20, 7, 23, 19, 10, 15, 25, 9, 12];
console.log(solution(arr));
