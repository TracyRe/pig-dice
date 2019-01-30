//business logic

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

// function Player(score, turnTotal) {
//   this.score = score;
//   this.turnTotal = turnTotal;
// }

var turnTotal = [];
function addTurnTotal() {
  var dice = getRandomInt(1, 7);
  console.log(dice);
  // debugger;
  if (dice !==  1) {
    turnTotal.push(dice);
    console.log(turnTotal);
    var sumTurn = turnTotal.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
    }, 0);
    console.log(sumTurn);
    return sumTurn;
  } else {
    console.log(dice);
    alert("You lose!");
    turnTotal=[0];
    return turnTotal;
  }
  // console.log(dice);
}





function holdTurn() {
  console.log(score);
  return score += turnTotal;
}


// function roll(num) {
//   var turnScoreArray = [];
//   turnScoreArray.push(num);
//   if (num !== 1) {
//   } else {
//     turnScoreArray = 0;
//   }
//   return turnScoreArray;
// }

//user interface
$(function() {

var player1 = {
  score: 0,
}

var player2 = {
  score: 0,
}



  $("button#roll1").click(function(){
    var roll1 = addTurnTotal();
    $(".player1-score").text(player1.score);
  });

  $("button#hold1").click(function(){
    var hold1 = holdTurn();

    $(".player1-score").text(player1.score);
  });
  $("button#roll2").click(function(){
    var roll2 = addTurnTotal();
    $(".player2-score").text(player2.score);
  });

  $("button#hold2").click(function(){
    var hold2 = holdTurn();

    $(".player2-score").text(player2.score);
  });
});
