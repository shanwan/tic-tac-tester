var gameOver = false
// var grid = [0,0,0,
//             0,0,0,
//             0,0,0]
var grid = [0, 0, 0,
            0, 0, 0,
            0, 0, 0]
var numberofturns = 0
var winner = 0
// simulateGame('P1 Top Row Victory', [0, 3, 1, 4, 2], playerOne)
// index refers to the position in the grid u want to go to
// assuming player 1 starts first always
function playTurn(index) {
  if(isGameOver () === true) {
    return false
  }
  else if (grid[index] === 1 || grid[index] === 2) {
    return false
  }
  else if (numberofturns === 0 || numberofturns % 2 !== 0) {
    grid[index] = 1
    numberofturns += 1
    return true
  }
  else if (numberofturns === 1 || numberofturns % 2 === 0) {
    grid[index] = 2
    numberofturns += 1
    return true
  }
}

console.log(playTurn(4));

function isGameOver () {
  if( whoWon() === 1 || whoWon() === 2 || whoWon() === 3) {
    return true
  } else {
    return false
  }
}
// simulateGame('P1 Top Row Victory', [0, 3, 1, 4, 2], playerOne)
function whoWon() {
  function getSum(a,b) {
    return a+b;
  }
// grid = [0,1,2,
//         3,4,5,
//         6,7,8]
  if (grid.reduce(getSum) === 0) {
    return 0
  } else if ((grid[3] === grid[4]) && (grid[4] === grid[5])) {
    winner = grid[3]
    return winner
  } else if ((grid[0] === grid[1]) && (grid[1] === grid[2])) {
    winner = grid[0]
    return winner
  } else if ((grid[6] === grid[7]) && (grid[7] === grid[8])) {
    winner = grid[6]
    return winner
  } else if ((grid[0] === grid[4]) && (grid[4] === grid[8])) {
    winner = grid[0]
    return winner
  } else if ((grid[2] === grid[4]) && (grid[4] === grid[6])) {
    winner = grid[2]
    return winner
  } else if ((grid[0] === grid[3]) && (grid[3] === grid[6])) {
    winner = grid[0]
    return winner
  } else if ((grid[1] === grid[4]) && (grid[4] === grid[7])) {
    winner = grid[1]
    return winner
  } else if ((grid[2] === grid[5]) && (grid[5] === grid[8])) {
    winner = grid[2]
    return winner
  } else {
  return 3
  }
}

function restart () {
  grid.fill(0)
}
