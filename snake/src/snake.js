

class Snake {
  
  constructor() {
    this.direction = Snake.directions[0];
    this.segments = [new Coord(9,9)];
  }
  
  
  move() {
    let moveCoord = [0,0];
    switch(this.direction) {
      case "N":
        moveCoord = [0,1];
        break;
      case "E":
        moveCoord = [1,0];
        break;
      case "S":
        moveCoord = [0,-1];
        break;
      case "W":
        moveCoord = [-1,0];
        break;
    }
    this.segments.forEach(el => {
      el.plus(moveCoord);
    });
  } 
  
  turn(direction) {
    this.direction = direction;
  }
}


class Coord {
  constructor (x,y) {
    this.x = x;
    this.y = y;
  }
  
  plus(moveCoord) {
    this.x += moveCoord[0];
    this.y += moveCoord[1];
  }
  
  equals() {
    
  }
  
  isOpposite() {
    
  }
}

Snake.directions = [
  "N", "E", "S", "W"
];