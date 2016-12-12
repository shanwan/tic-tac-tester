// var p1clicked = [0,1,4,2]
// var p2clicked = []
// var box = [0,1,2,3,4,5,6,7,8]
// var gameOver = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]
var gameOver = false
// var whoWon = 0
var usedIndexes = []


//index is the selected box by the player
function playTurn(index) {
  // for (var i = 0; i < usedIndexes.length; i++) {
    // if (INDEX i is in array MOVES, don't allow the move. return false)
    if (usedIndexes.indexOf(index) === -1) { // if cannot find input
      usedIndexes.push(index)
    }
      return true //allow the move
    } else {
    return false //dont allow the move
  }


// console.log(playTurn(2));

function isGameOver() {
  return gameOver
}

function whoWon() {
  // if () player1wins
  gameOver = true
}

function restart() {

}
