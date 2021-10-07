/**
 * 졸업선물
 *
 */

/**
 * 문제 접근 방법
 *
 * brutal force - 모든 경우의 수를 찾아본다
 * 정렬을 통해 싼 값부터 더할 수 있도록 하고
 * 할인을 받아 모든 조합을 만들어 본다
 *
 */

function solution(m, product) {
  let answer = 0;
  const n = product.length; // 5명

  product.sort((a, b) => a[0] + a[1] - (b[0] + b[1])); // 상품가격과 배송비용 둘이 합친 비용을 기준으로 sorting
  for (let i = 0; i < n; i++) {
    let money = m - (product[i][0] / 2 + product[i][1]);
    let count = 1;
    for (let j = 0; j < n; j++) {
      if (j !== i && product[j][0] + product[j][1] > money) {
        break;
      }
      if (j !== i && product[j][0] + product[j][1] <= money) {
        money -= product[j][0] + product[j][1];
        count++;
      }
    }
    answer = Math.max(answer, count);
  }

  return answer;
}

let arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];

console.log(solution(28, arr));
