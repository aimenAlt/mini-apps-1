import React from 'react';


var theStyle = {
  'color': "blue",
  "font-size": "200px"
}

const cell = (props) => (
  <td id={`${(props.rowNum)}X${props.colNum}` } onClick={props.addPiece} className="empty">  </td>
);

export default cell;