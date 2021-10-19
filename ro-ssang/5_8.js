const stringS = 'bacaAacba';
const stringT = 'abc';

function parse(string) {
  return [...string].reduce((obj, char) => {
    obj[char] = obj[char] + 1 || 1;
    return obj;
  }, {});
}

function isAnagram(str1, str2) {
  const parsedStr1 = parse(str1);
  const parsedStr2 = parse(str2);
  for (let alphabet in parsedStr1) {
    if (!parsedStr2[alphabet] || parsedStr1[alphabet] != parsedStr2[alphabet]) return false;
  }
  return true;
}

// Object 활용
function solution(stringS, stringT) {
  let count = 0;
  let left = 0;
  let str = '';
  for (let right = 0; right < stringS.length; right++) {
    str += stringS[right];
    if (right >= stringT.length - 1) {
      if (isAnagram(str, stringT)) {
        count++;
      }
      str = str.slice(1);
      left++;
    }
  }
  return count;
}

// Map 활용
function solution(stringS, stringT) {
  let answer = 0;
  const hashTable = new Map();
  for (let char of stringT) {
    hashTable.set(char, (hashTable.get(char) || 0) - 1);
  }
  let left = 0;
  for (let right = 0; right < stringS.length; right++) {
    const rightChar = stringS[right];
    hashTable.set(rightChar, (hashTable.get(rightChar) || 0) + 1);
    if (hashTable.get(rightChar) == 0) hashTable.delete(rightChar);
    if (right >= stringT.length - 1) {
      if (hashTable.size == 0) answer++;
      const leftChar = stringS[left];
      hashTable.set(leftChar, (hashTable.get(leftChar) || 0) - 1);
      if (hashTable.get(leftChar) == 0) hashTable.delete(leftChar);
      left++;
    }
  }
  return answer;
}

console.log(solution(stringS, stringT));
