import React, { Component } from 'react';
import './App.css';
class App extends Component {
  state={
    squares:Array(9).fill(null),
    xIsNext: true,
  }
  handleClick(i) {
    const squares = this.state.squares.slice();
    if (this.calculateWinner(squares) || squares[i]) return;
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({squares: squares,xIsNext: !this.state.xIsNext,});
  }    
  calculateWinner=(squares) =>{
    const lines = [
      [0, 1, 2],[3, 4, 5],[6, 7, 8],[0, 3, 6],
      [1, 4, 7],[2, 5, 8],[0, 4, 8],[2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
  render() {
    const sq =[0,1,2,3,4,5,6,7,8];  
    const winner = this.calculateWinner(this.state.squares);
    const status = winner ? 'Winner : ' + winner : 'Next player : ' + (this.state.xIsNext ? 'X' : 'O');
    return (
        <div className="mainscreen bg-dark">
        <div className="status">{status}</div>  
        {           
          sq.map(s=> <button value={this.state.squares[s]} onClick={() => this.handleClick(s)}>{this.state.squares[s]}</button>)
        }                             
        </div>                       
    );
  }
}

export default App;
