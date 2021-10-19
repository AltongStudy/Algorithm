const word1 = 'abaCC';
const word2 = 'Caaab';

// Object 활용
function getAlphabets(word) {
  return [...word].reduce((obj, alphabet) => {
    obj[alphabet] = obj[alphabet] + 1 || 1;
    return obj;
  }, {});
}

function solution(word1, word2) {
  const alphabets1 = getAlphabets(word1);
  for (let char of word2) {
    if (!alphabets1[char] || alphabets1[char] == 0) {
      return 'NO';
    }
    alphabets1[char] -= 1;
  }
  return 'YES';
}

// Map 활용
function solution2(word1, word2) {
  const hashTable = new Map();
  for (let char of word1) {
    hashTable.set(char, hashTable.get(char) + 1 || 1);
  }
  for (let char of word2) {
    if (!hashTable.has(char) || hashTable.get(char) == 0) {
      return 'NO';
    }
    hashTable.set(char, hashTable.get(char) - 1);
  }
  return 'YES';
}

console.log(solution(word1, word2));
