// import React from 'react';

module.exports.boardCreator = () => {
  var rows = [];
  var colCells = [];
  for (var j = 0; j < 7; j++) {
    colCells.push({played: false, by: null});   
  }
  for (var i = 0; i < 6; i++) {
    rows.push(colCells);
  }
  return rows;
}

// module.exports.clickedCell = (event) => {
//   console.dir(event);
// }