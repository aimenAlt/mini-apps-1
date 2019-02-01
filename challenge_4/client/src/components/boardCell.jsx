import React from 'react';


var theStyle = {
  'color': "blue",
  "font-size": "200px"
}



const cell = (props) => {
  const funct = props.addPiece;
  const cellID = `${(props.rowNum)}X${props.colNum}`;
  return (
    <td id={cellID} onClick={(event) => {funct(cellID, event)}} className="empty">  </td>
  );
}

export default cell;