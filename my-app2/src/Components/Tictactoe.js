import { useReducer, useState } from "react";
import "../index.css";

const Player1 = "Player1";
const Player2 = "Player2";
const playerContent = {
  Player1: "0",
  Player2: "X",
};

const Cell = ({ gameState, dispatch, row, col }) => {
  const nextPlayer = gameState.player === Player1 ? Player2 : Player1;
  return (
    <div
      className="cell"
      onClick={() => {
        if (!gameState.playerContentArr[row][col]) {
          dispatch({
            type: "player_click",
            player: nextPlayer,
            row: row,
            col: col,
          });
        }
      }}
    >
      {gameState.playerContentArr[row][col]}
    </div>
  );
};

const initState = {
  activePlayer: "",
  playerContentArr: [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ],
};
function reducer(state, actions) {
  switch (actions.type) {
    case "player_click":
      const historyArr = state.playerContentArr;
      historyArr[actions.row][actions.col] = playerContent[actions.player];
      return {
        ...state,
        player: actions.player,
        playerContentArr: [...historyArr],
      };
    default:
      throw Error("unknwn tpype");
  }
}

// activePlayer -player1 or 2 -> 0 or x

export default function Tictactoe() {
  const [gameState, dispatch] = useReducer(reducer, initState);

  return (
    <div className="gameContainer">
      <div className="row">
        <Cell
          gameState={gameState}
          dispatch={dispatch}
          key={"cell0"}
          row={0}
          col={1}
        />
        <Cell
          gameState={gameState}
          dispatch={dispatch}
          key={"cell1"}
          row={0}
          col={2}
        />
        <Cell
          gameState={gameState}
          dispatch={dispatch}
          key={"cell2"}
          row={0}
          col={3}
        />
      </div>
      <div className="row">
        <Cell
          gameState={gameState}
          dispatch={dispatch}
          key={"cell3"}
          row={1}
          col={0}
        />
        <Cell
          gameState={gameState}
          dispatch={dispatch}
          key={"cell4"}
          row={1}
          col={1}
        />
        <Cell
          gameState={gameState}
          dispatch={dispatch}
          key={"cell5"}
          row={1}
          col={2}
        />
      </div>
      <div className="row">
        <Cell
          gameState={gameState}
          dispatch={dispatch}
          key={"cell6"}
          row={2}
          col={0}
        />
        <Cell
          gameState={gameState}
          dispatch={dispatch}
          key={"cell7"}
          row={2}
          col={1}
        />
        <Cell
          gameState={gameState}
          dispatch={dispatch}
          key={"cell8"}
          row={2}
          col={2}
        />
      </div>
    </div>
  );
}
