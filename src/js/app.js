export default class Board {
    constructor(size) {
      this.size = size;
    }
  
start() {
  function getRandomInt(min, max) {
    const minCeil = Math.ceil(min);
    const maxFloor = Math.floor(max);
    return Math.floor(Math.random() * (maxFloor - minCeil)) + minCeil;
  }

    const cellList = document.getElementsByClassName('cell');
    let currentCell;
    
    setInterval(() => {
      if (currentCell !== undefined) {
        currentCell.classList.remove('cell__active');
      }
      let cell = cellList[getRandomInt(0, cellList.length)];
      while (cell === currentCell) {
        cell = cellList[getRandomInt(0, cellList.length)];
      }
      currentCell = cell;
      cell.classList.add('cell__active');
    }, 1000);
  }
}

const board = new Board(4);
board.start();