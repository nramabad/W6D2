class View {
  //$el is HTML figure element
  constructor(game, $el) {
    this.game = game;
    this.$el = $el; 
    this.setupBoard();
    this.bindEvents();
  }                                                                                                 
    
  bindEvents() {
    this.$el.on('click', '#square', (e) => {
      let $square = $(e.target);
      this.game.playMove($square.data().pos);
      this.makeMove($square);
      if (this.game.isOver()) {  
        let winner = this.game.winner() === 'x' ? "Ryan" : "Daddy";
        let $printWinner = $(`<center><h1>Tie! Better luck next time, Daddy!</h1></center>`);
        if (this.game.winner() != null && this.game.isOver() == true) {
          $printWinner = $(`<center><h1>You won  ${winner}!</h1></center>`);
        }
    
    
        // console.log($printWinner);
        // console.log(this.$el);
        this.$el.append($printWinner);
        // console.log(this.$el);
      }
    } );
  }

  makeMove($square) {
    // setTimeout(() => { $square.removeClass();
    if (this.game.currentPlayer === 'x') {
      $square.addClass("daddy");
    } else {
      $square.addClass("ryan");
    } 
  // }, 3000);
    
    

  }

  setupBoard() {
    const indices = [[0,0], [0,1], [0,2], 
                     [1,0], [1,1], [1,2],
                     [2,0], [2,1], [2,2]];
    const $grid = $("<ul>");
    $($grid).addClass("tic-tac-grid");
    for (var i = 0; i < 9; i++) {
      let $cell = $("<li class='cell'>");
      $cell.attr('id', 'square');
      $cell.data('pos', indices[i]);
      $grid.append($cell);
    }
    this.$el.append($grid);
  }
  
}

module.exports = View;
