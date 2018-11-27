const View = require("./ttt-view.js");// require appropriate file
const Game = require("../logic/game.js");// require appropriate file

  $(() => {
    const game = new Game();
    let $rootEl = $(".ttt");
    new View(game, $rootEl);
  });

  