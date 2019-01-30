//business logic

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function Player(score, turnTotal) {
  this.score = score;
  this.turnTotal = turnTotal;
  this.turn = true;
  this.hold;
}

Player.prototype.addTurnTotal = function() {
  var dice = getRandomInt(1, 7);
  if (dice ===  1) {
    turn = false;
    return turnTotal;
  } else {
    turnTotal += dice;
  }
  console.log(dice);
  return turnTotal;
}

Player.prototype.holdTurn = function() {
  console.log(score);
  turn = false;
  return score += turnTotal;
}

// Player.prototype.addScoreTotal = function() {
//     return ;
//   } else {
//
//   }
//   console.log(dice);
//   return scoreTotal;
// }

//user interface
