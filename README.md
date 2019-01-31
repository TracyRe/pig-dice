# Pig Dice

#### Object Oriented Programming  for Epicodus - 2019-0130

#### By Tracy Reith  and Dino Nguyen

## Description
A Javascript game mimicking pig dice game. Click the "Roll" button to get a randomly generated number between one and six. Players take turns


### Learning Objective

Objects, constructors, prototypes.

### Specs

Specification | Input | Output
------------- | ----- | ------
The system will allow for 2 players
The system will display which player's turn it is | |
// The system will add each player's turn total
The system will display the current player's turn total
The system will add each player's turn total to the player's score at the end of their turn
The system will record each player's score
The system will display each player's score
// When a player rolls, a number between 1 and 6 is randomly generated | "Roll" | 3
. | "Roll" | 4
. | "Roll" | 4
. | "Roll" | 1
// When player1 rolls 1, the total does not increase  | 1 | Player1 score does not increase
When player1 rolls 1, player1's turn ends  | 1 | Player2's turn
// When player1 rolls >1, the turn total increases by the value of the roll  | 2 | turn total: +2
// When player1 rolls >1,  player1 rolls again  | 2 | Player1's turn
When player1 chooses to "hold", player1's current turn total is added to player1's score | player1 hold AND player 1 current score = 7 AND player1 turn total = 5 | player1 new score = 12 AND player2's turn
When either player's score is greater or equal to 100, the game ends | Score = 100 | End of game
. | Score = 102 | End of game
The first player to reach 100 or greater is the winner | Player1 score => 100 | Player1 wins





### Stretch Goals

* Show the current round of the game
* Multiple players
* Enter player names

## Setup/Installation Requirements

* View at
* Clone from
* Open in browser of your choice
* Edit files as desired


## Known Bugs

None known

## Support and contact details

N/A

## Technologies Used

HTML, CSS with Bootstrap, Javascript with jQuery

### License

N/A

Copyright (c) 2019 Tracy Reith and Dino Nguyen
