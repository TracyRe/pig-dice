//business logic

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

// var dice = getRandomInt(1, 7);

function Player() {
  this.score = 0;
  this.turnTotal = 0;
  this.turn = true;
  this.hold;
}

Player.prototype.addTurnTotal = function() {
  var dice = getRandomInt(1, 7);
  if (dice ===  1) {
    this.turn = false;
    return this.turnTotal;
  } else {
    this.turnTotal += dice;
  }
  console.log(dice);
  return this.turnTotal;
}

Player.prototype.holdTurn = function() {
  console.log(this.score);
  this.turn = false;
  return this.score += this.turnTotal;
}


//user interface
$(function() {

var player1 = new Player ();
var player2 = new Player ();

  $("button#roll1").click(function(){
    var roll1 = player1.addTurnTotal();
    $(".player1-score").text(player1.score);
  });

  $("button#hold1").click(function(){
    var hold1 = player1.holdTurn();

    $(".player1-score").text(player1.score);
  });
  $("button#roll2").click(function(){
    var roll2 = player2.addTurnTotal();
    $(".player2-score").text(player2.score);
  });

  $("button#hold2").click(function(){
    var hold2 = player2.holdTurn();
    $(".player2-score").text(player2.score);
  });
});
