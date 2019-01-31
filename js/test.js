// //business logic
//
// function getRandomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min)) + min;
// }
//
//
// var turnTotal = [];
//
// function addTurnTotal() {
//   var dice = getRandomInt(1, 7);
//   console.log(dice);
//   // debugger;
//   if (dice !==  1) {
//     turnTotal.push(dice);
//     console.log(turnTotal);
//     var sumTurn = turnTotal.reduce(function (accumulator, currentValue) {
//     return accumulator + currentValue;
//     }, 0);
//     console.log(sumTurn);
//     return sumTurn;
//   } else {
//     console.log(dice);
//     alert("You lose!");
//     turnTotal=[0];
//     return turnTotal;
//   }
//   // console.log(dice);
// }
//
//
//
//
//
// function holdTurn(currentScore, currentTurn) {
//   var turn = sumTurn;
//   var currentScore = 0;
//   currentScore = currentScore + turn;
//   console.log(currentScore);
//   return currentScore;
// }


$("button#roll1").click(function(){
  var roll1 = player1.addTurnTotal();
  if (player1.dice === 1) {
    $("#player1-buttons").toggle();
    $("#player2-buttons").toggle();
  }
  $(".player1-roll").text(player1.dice);
  // console.log(player1.dice);
  $("span.player1-turn-total").text(player1.turnTotal);
  // $(".player1-turn-total").text("");
});

$("button#hold1").click(function(){
  var hold1 = player1.holdTurn();
  $("#player1-buttons").toggle();
  $("#player2-buttons").toggle();

  $(".player1-score").text(player1.score);
  $(".player1-roll").text("");
  // $(".player2-turn-total").text("");

  if (player1.score >= 100 ) {
    $("#player1-buttons").hide();
    $("#player2-buttons").hide();
    $(".player1-winner").show();
    $(".player1-roll").text("");
    $(".player1-turn-total").text("");
  }
});
$("button#roll2").click(function(){
  var roll2 = player2.addTurnTotal();
  if (player2.dice === 1) {
    $("#player1-buttons").toggle();
    $("#player2-buttons").toggle();
  }
  $(".player2-roll").text(player2.dice);
  $(".player2-turn-total").text(player2.turnTotal);
  // $(".player2-turn-total").text("");
});

$("button#hold2").click(function(){
  var hold2 = player2.holdTurn();
  $("#player1-buttons").toggle();
  $("#player2-buttons").toggle();
  $(".player2-roll").text("");
  // $(".player1-turn-total").text("");

  $(".player2-score").text(player2.score);

  if (player2.score >= 100 ) {
    $("#player1-buttons").hide();
    $("#player2-buttons").hide();
    $(".player2-winner").show();
    $(".player2-roll").text("");
    $(".player2-turn-total").text("");
  }
