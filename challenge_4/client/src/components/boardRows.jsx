import React from 'react';
import Cell from './boardCell.jsx'


const board = (props) => {
  var rows = [];
  for (var i = 0; i < 6; i++) {
    var cells = [];
    for (var j = 0; j < 7; j++) {
      cells.push(<Cell rowNum={i} colNum={j} addPiece={props.addPiece} />);   
    }
    rows.push(<div className='rowsClass'><tr> {cells} </tr></div>);
  }
  return (
    <table className='zaBoard' border={3}>
      {rows}
    </table>
  );
}

export default board;