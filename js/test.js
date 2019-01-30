//business logic

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function Player(score, turnTotal) {
  this.score = score;
  this.turnTotal = turnTotal;
}

Player.prototype.addTurnTotal = function() {
  var dice = getRandomInt(1, 7);
  if (dice ===  1) {
    return turnTotal;
  } else {
    turnTotal += dice;
  }
  console.log(dice);
  return turnTotal;
}

Player.prototype.addScoreTotal = function() {
    return ; /
  } else {

  }
  console.log(dice);
  return scoreTotal;
}

//user interface
