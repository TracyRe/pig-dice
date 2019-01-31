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
