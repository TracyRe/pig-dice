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
  this.dice = 0;
}

Player.prototype.addTurnTotal = function() {
  var dice = getRandomInt(1, 7);
  console.log(dice);
  if (dice ===  1) {
    this.turn = false;
    this.dice = 1;
    return this.turnTotal = 0;
  } else {
    this.dice = dice;
    this.turnTotal += dice;
  }
  return this.turnTotal;
}

Player.prototype.holdTurn = function() {
  console.log(this.score);
  this.turn = false;
  this.score += this.turnTotal;
  this.turnTotal = 0;
  return this.score;
}


//user interface
$(function() {

var player1 = new Player ();
var player2 = new Player ();

  $("button#roll1").click(function(){
    var roll1 = player1.addTurnTotal();
    $(".player1-roll").text(player1.dice);
    console.log(player1.dice);
    $("span.player1-turn-total").text(player1.turnTotal);
  });

  $("button#hold1").click(function(){
    var hold1 = player1.holdTurn();
    $("#player1-buttons").toggle();
    $("#player2-buttons").toggle();

    $(".player1-score").text(player1.score);
  });
  $("button#roll2").click(function(){
    var roll2 = player2.addTurnTotal();
    $(".player2-roll").text(player2.dice);
    $(".player2-turn-total").text(player2.turnTotal);
  });

  $("button#hold2").click(function(){
    var hold2 = player2.holdTurn();
    $(".player2-score").text(player2.score);
    $("#player1-buttons").toggle();
    $("#player2-buttons").toggle();
  });
});
