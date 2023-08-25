import React, { useState } from "react";
import { chatReducer, initialState } from "./chatReducer";
import "./index.css";

const persons = [
  { id: 1, name: "Alice", email: "alice@gmail.com" },
  { id: 2, name: "Bob", email: "bob@gmail.com" },
  { id: 3, name: "Taylor", email: "taylor@gmail.com" },
];

const Chat = ({ dispatch, state }) => {
  const selectedPerson = persons.find((p) => p.id === state.selectedId);
  const message = state.messages[state.selectedId];
  const personId = state.selectedId;
  //   console.log(chatva);
  //   React.useEffect(() => {
  //     setChat(text);
  //   }, [personId, selectedPerson]);
  return (
    <div key={`chat-${personId}`}>
      <textarea
        className={"chatWindow"}
        value={message}
        onChange={(ev) => {
          dispatch({
            type: "change_message",
            message: ev.target.value,
          });
        }}
        key={selectedPerson.name}
      ></textarea>
      <button
        onClick={() => {
          dispatch({
            type: "send_message",
            message: "",
          });
        }}
      >
        Send Chat to {selectedPerson.email}
      </button>
    </div>
  );
};

const ChatComponent = () => {
  const [state, dispatch] = React.useReducer(chatReducer, initialState);

  return (
    <div className="container">
      <div>
        {persons.map((person) => {
          const selectedCls = person.id === state.selectedId ? "highlight" : "";
          return (
            <div
              key={person.id}
              id={person.id}
              onClick={() => {
                dispatch({
                  type: "changed_selection",
                  selectedId: person.id,
                });
              }}
              className={`chatContainer ${selectedCls}`}
            >
              {person.name}
            </div>
          );
        })}
      </div>
      <Chat dispatch={dispatch} state={state} />
    </div>
  );
};

export default ChatComponent;
