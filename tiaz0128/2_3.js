
function solution(a, b){
  return  a.map((aTu, i) => {
        if(aTu === b[i]) return  'D'

        switch(aTu){
            case 1: 
                if(b[i] == 3) return 'A'
                break
            case 2: 
                if(b[i] == 1) return 'A'
                break
            case 3: 
                if(b[i] == 2) return 'A'    
                break
        }
        
        return 'B'
    })
}

console.log(solution([2,3,3,1,3],[1,1,2,2,3]))


const RPS = {
  SCISSORS : 1, // 가위
  ROCK     : 2, // 바위
  PAPER    : 3, // 보
}

const isWinner = {
  [RPS.SCISSORS] : (target) => { return target === RPS.PAPER ? 'A' : 'B' },
  [RPS.ROCK]     : (target) => { return target === RPS.SCISSORS ? 'A' : 'B' },
  [RPS.PAPER]    : (target) => { return target === RPS.ROCK ? 'A' : 'B' } 
}

function solution2(a, b){
  return a.map((itemA, idx) => {
    const itemB = b[idx]
    return itemA === itemB? 'D' : isWinner[itemA](itemB)
  })
}

console.log(solution2([2,3,3,1,3],[1,1,2,2,3]))