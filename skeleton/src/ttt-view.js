class View {
  //$el is HTML figure element
  constructor(game, $el) {
    this.game = game;
    this.$el = $el; 
    this.setupBoard();
  }                                                                                                 
    
  bindEvents() {}

  makeMove($square) {}

  setupBoard() {
    const $grid = $("<ul>");
    $($grid).addClass("tic-tac-grid");
    console.log($grid);
    for (var i = 0; i < 9; i++) {
      $grid.append("<li class='cell'></li>");
    }
    console.log($grid);
    this.$el.append($grid);
  }
  
}

module.exports = View;
