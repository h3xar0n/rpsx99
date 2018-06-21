// All code should be written in this file.

// Array of valid move types
const validMoveTypes = ['rock', 'paper', 'scissors'];

// Initialize global move type and value variables
let playerOneMoveOneType,
  playerOneMoveOneValue,
  playerOneMoveTwoType,
  playerOneMoveTwoValue,
  playerOneMoveThreeType,
  playerOneMoveThreeValue,
  playerTwoMoveOneType,
  playerTwoMoveOneValue,
  playerTwoMoveTwoType,
  playerTwoMoveTwoValue,
  playerTwoMoveThreeType,
  playerTwoMoveThreeValue = undefined;

// Set values for the above variables
function setPlayerMoves(player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) {

  if (!player || !moveOneType || !moveOneValue || moveOneValue < 1 || moveOneValue > 99 || !moveTwoType || !moveTwoValue || moveTwoValue < 1 || moveTwoValue > 99 || !moveThreeType || !moveThreeValue || moveThreeValue < 1 || moveThreeValue > 99 || moveOneValue + moveTwoValue + moveThreeValue > 99) {
    throw new Error("Missing or invalid argument")
    return;
  } else {

    if (String(player) === 'Player One') {

      // Set first move for player one
      const firstMoveType = String(moveOneType).toLowerCase();

      if (validMoveTypes.includes(firstMoveType)) {
        playerOneMoveOneType = firstMoveType;
        playerOneMoveOneValue = moveOneValue;
      } else {
        throw new Error("Invalid type for move one");
        return;
      }

      // Set second move for player one
      const secondMoveType = String(moveTwoType).toLowerCase();

      if (validMoveTypes.includes(secondMoveType)) {
        playerOneMoveTwoType = secondMoveType;
        playerOneMoveTwoValue = moveTwoValue;
      } else {
        throw new Error("Invalid type for move two");
        return;
      }

      // Set third move for player one
      const thirdMoveType = String(moveThreeType).toLowerCase();

      if (validMoveTypes.includes(thirdMoveType)) {
        playerOneMoveThreeType = thirdMoveType;
        playerOneMoveThreeValue = moveThreeValue;
      } else {
        throw new Error("Invalid type for move three");
        return;
      }

    } else if (String(player) === 'Player Two') {

      // Set first move for player two
      const firstMoveType = String(moveOneType).toLowerCase();

      if (validMoveTypes.includes(firstMoveType)) {
        playerTwoMoveOneType = firstMoveType;
        playerTwoMoveOneValue = moveOneValue;
      } else {
        throw new Error("Invalid type for move one");
        return;
      }

      // Set second move for player two
      const secondMoveType = String(moveTwoType).toLowerCase();

      if (validMoveTypes.includes(secondMoveType)) {
        playerTwoMoveTwoType = secondMoveType;
        playerTwoMoveTwoValue = moveTwoValue;
      } else {
        throw new Error("Invalid type for move two");
        return;
      }

      // Set third move for player two
      const thirdMoveType = String(moveThreeType).toLowerCase();

      if (validMoveTypes.includes(thirdMoveType)) {
        playerTwoMoveThreeType = thirdMoveType;
        playerTwoMoveThreeValue = moveThreeValue;
      } else {
        throw new Error("Invalid type for move three");
        return;
      }

    } else {
      throw new Error("Player must be either 'Player One' or 'Player Two'");
      return;
    }

  }

}
