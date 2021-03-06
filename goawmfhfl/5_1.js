/**
 * ๐ ์ต๋๋งค์ถ ๐
 * 
 *  ๐ง๐ปโ๐ป  ๋์ ๋ฌธ์  ํ์ด  ๐ง๐ปโ๐ป
 * 1. ํฌํฌ์ธํฐ ์๊ณ ๋ฆฌ์ฆ์ ํ์ฉํด์ ๋ฌธ์ ํ์ด๋ฅผ ์งํํ๋ค.
 * 2. ์ค๋ฅธ์ชฝ์ ํฌ์ธํฐ๋ฅผ ํ์ฉํด์ sum์ 4๊ฐ์ ๊ฐ์ด ๋ด๊ธธ ๊ฒฝ์ฐ if ์กฐ๊ฑด๋ฌธ ๋ฐ์
 * 3. ์กฐ๊ฑด๋ฌธ์ ์ํด์ ์ผ์ชฝ ํฌ์ธํฐ์ ๊ฐ์ ๋นผ์ค๋ค.
 * 4. ์ดํ k์ ๊ฐ์ ++ ํด์ค์ผ๋ก์จ ์ค๋ฅธ์ชฝ ํฌ์ธํฐ๊ฐ ์ด๋ํ  ๋ ์ผ์ชฝ ํฌ์ธํฐ๋ ํจ๊ป ์ด๋ํ  ์ ์๋๋ก ์ง์ 
 * 5. for๋ฌธ์ ๊ฑฐ์น  ๋๋ง๋ค answer์๋ Math.max ๋ฉ์๋๋ฅผ ํ์ฉํ์ฌ ์ต๋๊ฐ ๋น๊ตํด์ ํ ๋น.
 */

 function solution(arr, k) {
    let answer = Number.MIN_SAFE_INTEGER;
    let sum = 0;
    let lt = 0;

    for(let rt=0; rt<arr.length; rt++){
        sum+=arr[rt]
        if(rt === k){
            sum-=[arr[lt++]]
            k++
        }
        answer = Math.max(sum,answer)
    }

    return answer;
}

let days = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15]
console.log(solution(days,3));

// ๐จ๐ปโ๐ซ ๊ฐ์ฌ๋์ ๋ฌธ์  ํ์ด ๐จ๐ปโ๐ซ
/**
 * 1. for๋ฌธ์ ํตํด์ ์ฒซ ๋ฒ์งธ sum์ ์ดํฉ์ ๊ตฌํ์
 * 2. ๋๋ฒ์งธ for๋ฌธ์์๋ ์ด๊ธฐ์์ k๋ฒ์งธ๋ถํฐ ์์ํจ.
 * 3. ์ฌ๋ผ์ด๋ฉ ์๋์ฐ ๋ฐฉ์์์ ์๋ก ์ถ๊ฐํ๋ ์์๋ฅผ arr[i]์์ผ๋ก ํํ,
 * 4. ์ญ์ ๋๋ ์์๋ฅผ arr[i-k]๋ก ํํ
 * 5. 0๋ฒ์งธ ์ธ๋ฑ์ค๋ ์ญ์  3๋ฒ์งธ ์ธ๋ฑ์ค๋ ์ถ๊ฐ๋๋ ์์ผ๋ก ๊ตฌ์ฑ.
 * 6. ์์ํ๋ ํฌ์ธํธ๋ฅผ i-k๋ฅผ ํตํด์ ์ ํด์คฌ์.
 * 7. ๊ทธ๋ฐ๋ค์ Math.max๋ฅผ ํตํด์ ๊ฐ์ ๋ฐ๋ก ๊ตฌํจ.
 */

 function solution(arr,k){
    let answer = 0;
    let sum = 0;
    // ์ต๋๊ฐ ๊ตฌํ๊ธฐ
    for(let i=0; i<k; i++) sum += arr[i]
    answer = sum;
    for(let i=k; i<arr.length; i++){
    sum+=(arr[i]-arr[i-k])
    answer = Math.max(answer,sum)
    }
    return answer;
    }
    let days = [12,15,11,20,25,10,20,19,13,15]
    console.log(solution(days,3));