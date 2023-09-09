import React, { useState } from "react";
const playerData = {
  player1: "x",
  player2: "o",
};

const Child = ({ activePlayer, setActivePlayer }) => {
    const nextPlayer = activePlayer === 'player1' ? 'player2': 'player1';
  return (
    <>
      <div activePlayer={activePlayer} onClick={()=> {
        setActivePlayer(nextPlayer)
      }}>{activePlayer}</div>
      <div>{playerData[activePlayer]}</div>
    </>
  );
};
export default  function Comp3 ()  {
  const [activePlayer, setActivePlayer] = useState("player1");
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Child activePlayer={activePlayer} setActivePlayer={setActivePlayer} />
    </div>
  );
};
