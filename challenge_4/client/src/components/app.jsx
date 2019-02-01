import React from 'react';
import ReactDOM from 'react-dom';
import BoardCell from './boardCell.jsx';
import Board from './boardRows.jsx';
import BoardMethods from './boardInit.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      turn: "blue",
      board: BoardMethods.boardCreator()
    }
  }
  


  render() {
    return (
      <div>
        <h1>Now it Begins</h1>
        <Board />
      </div>);
  }
}

export default App;