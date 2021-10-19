/**
 * 
 * 1. 가격과 배송비를 제출하라고 했습니다.
 * 2. 선생님의 가지고 잇는 예산은 한정되어있습니다
 * 3. 선생님은 50퍼센트 할인할 수 있는 쿠폰도 가지고 있습니다. 배송비는 포함하지 않아요
 * 
 * 입력설명 :
 * 학생수 5 예산 28
 * 가격 6 배송비 6
 * 상품가격은 짝수로만 입력됩니다.
 * 
 * 출력 설명 :
 * 현재 예산으로 선물할 수 있는 최대 학생수를 출력.
 */

/**
- sort를 해 주는 방법에 대해서 알아야 합니다 a-b는 오름 차순 정렬 입니다.
- 이중 for문을 통해서 순회합니다 이때 길이값은 상품들의 길이값과 동일합니다.
- money 변수를 할당하여 첫번째 상품의 가격에 50%를 하고 그리고 뺀 값을 할당합니다즉 money에는 이미 한 학생의 상품에 50%할인율을 적용시키고 나머지 배송비와 더한 후에 총 액에서 뺀 값이 저장되어 있는겁니다
- cnt변수에는 1을 할당해 줍니다 왜냐하면 이미 money변수에서 1이 카운팅이 되었기 때문입니다.
- 이중 for문을 돕니다. 이때 i!==j을 해주어야합니다 i번째 경우의 수는 이미 money변수를 통해서 구해졌습니다.
- 나머지를 순회합니다. 순회하면서 학생들의 물품을 구매하기 시작합니다. 구매하면서 money변수의 값도 함께 줄어듭니다.
- 줄어듦과 동시에 카운팅을 해줍니다. 그리고 이중 for문이 끝났을 때 카운팅 된 값을 answer에 할당합니다.
- 결국 이중 포문을 통해서 answer에는 Math.max함수를 통해서 최고값이 할당됩니다.
 * 
 */

/* 👨🏻‍🏫 강사님 문제 풀이 👨🏻‍🏫 */

function solution(asset,product){
    let answer = 0
    let n = product.length; 
    product.sort((a,b)=>(a[0]+a[1])-(b[0]+b[1]))
    
    for(let i=0; i<n; i++){
        let money = asset-(product[i][0]/2+product[i][1])
        let cnt = 1
        for(let j=0; j<n; j++){
            if(j!==i && product[j][0]+product[j][1]>money) break;
            if(j!==i && product[j][0]+product[j][1]<=money){
                money -= product[j][0]+product[j][1]
                cnt++
            }
        }
        answer = Math.max(answer,cnt)
    }

    return answer;
}
let price =[[6,6],[2,2],[4,3],[4,5],[10,3]]
console.log(solution(28,price));


/* 💡 문제 풀이 💡 */

function solution(m, product) {
let answer = [];

// 첫 번째 for 문 : 할인 상품 지정
// 두 번째 for 문 : 상품 최대 구매 가능 갯수 카운팅

for (let i = 0; i < product.length; i++) {
    let money = m;
    let count = 0;
// 50% 할인 적용
    product[i][0] = product[i][0] * 0.5;

// 할인 적용후 오름차순 정렬
    let sortedArr = product
        .map(value => value.reduce((acc, cur) => acc + cur))
        .sort((a, b) => a - b);
    for (let j = 0; j < sortedArr.length; j++) {
        if (sortedArr[j] > money) {
        break;
    }
        money -= sortedArr[j];
        count++;
    }
    answer.push(count);
// 초기화
product[i][0] = product[i][0] * 2;
}

    return Math.max(...answer);
}

let arr = [[6, 6], [2, 2],[4, 3],[4, 5],[10, 3]];
console.log(solution(28, arr));