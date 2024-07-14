import React, { useState } from "react";
import "./style.css";
import Box from "../Box";
//TODO: RESTART +
//TODO:RENKLENDİRME +
//TODO:HEPSİ DOLUNCA KAZANAN OLMAZSA DRAW YAZSIN +
//TODO:BİTİNCE EKLENEMESİN 
const board = [[],[],[]]

function Game() {
  const [turn, setTurn] = useState("X");
  const [winningText,setWinningText] = useState("");
  const [isAddable,setIsAddable] = useState(true)

  function countFilledElements(arr) {
    return arr.reduce((count, element) => {
      if (element !== null && element !== undefined) {
        return count + 1;
      }
      return count;
    }, 0);
  }
 
  function changeTurn(row,col) {
    console.log(isAddable)
    if (isAddable) {
      board[row][col]=turn
      setTurn((turn) => (turn === "X" ? "O" : "X"));
      console.log(board)  
    }
    const winner = checkForWin();
    if (!winner) {
      //asf
    }else{
      setWinningText(winner)
      setIsAddable(false)
    }
  }
  function checkForWin() {
    //kolon
    for (let index = 0; index < board.length; index++) {
      const col = board[index];
      if (col[0] && col[0]===col[1] && col[1]===col[2]) {
        return col[0]
      }
    }
    //satır
    for (let index = 0; index < board.length; index++) {
      const row1 = board[0][index];
      const row2 = board[1][index];
      const row3 = board[2][index];
      if (row1 && row1===row2 && row2===row3) {
        return row1
      }
    }
    //çapraz
    const d1=board[0][0]
    const d3=board[2][2]
    const p1=board[0][2]
    const p3=board[2][0]
    const x2=board[1][1]

    if (d1 && d1===x2 && x2===d3 ) {
      return d1
    }
    if (p1 && p1===x2 && x2===p3 ) {
      return p1
    }

  }

  function restartGame() {
    window.location.reload();
  }

  return (
    <div id="game">
       <div id="winning-text">{winningText ? winningText + "won :D" : countFilledElements(board[0])===3 && countFilledElements(board[1])===3 && countFilledElements(board[2])===3 ?"Draw": turn+"'s turn"}</div>
      <div className="row">
        <Box row={0} col={0} currentState={turn} changeTurn={changeTurn} isAddable={isAddable} />
        <Box row={0} col={1} currentState={turn} changeTurn={changeTurn} isAddable={isAddable}/>
        <Box row={0} col={2} currentState={turn} changeTurn={changeTurn} isAddable={isAddable}/>
      </div> 
      <div className="row">
        <Box row={1} col={0} currentState={turn} changeTurn={changeTurn} isAddable={isAddable}/>
        <Box row={1} col={1} currentState={turn} changeTurn={changeTurn} isAddable={isAddable}/>
        <Box row={1} col={2} currentState={turn} changeTurn={changeTurn} isAddable={isAddable}/>
      </div>
      <div className="row">
        <Box row={2} col={0} currentState={turn} changeTurn={changeTurn} isAddable={isAddable}/>
        <Box row={2} col={1} currentState={turn} changeTurn={changeTurn} isAddable={isAddable}/>
        <Box row={2} col={2} currentState={turn} changeTurn={changeTurn} isAddable={isAddable}/>
      </div>
      <button onClick={restartGame}>RESTART</button>
    </div>
  );
}

export default Game;
