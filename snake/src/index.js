const Game = require("./game.js");
const Snake = require("./snake.js");

$(() => {
  let game = new Game();
  let snake = new Snake();
  new View(game, snake);
  
});
