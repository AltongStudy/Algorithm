// ✅ 7-1 선택정렬

// // 👨🏻‍🏫 강사님 문제 풀이 👨🏻‍🏫

function solution(arr){
    let answer = arr

    for(let i=0; i<arr.length-1; i++){
        let idx = i
        for(let j=i+1; j<arr.lengh; j++){
				if(arr[idx]>arr[j]) idx = j;
	    }
		[arr[i], arr[idx] = [arr[idx], arr[i]];
	}
  return answer;
}

let arr = [13,5,11,7,23,15]
console.log(solution(arr));