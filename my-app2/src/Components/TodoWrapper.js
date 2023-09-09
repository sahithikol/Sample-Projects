import React, { useContext, useReducer, useState } from "react";
import { TodoList } from "./TodoList";
import {
  initState,
  TodoContext,
  TodoDispatchContext,
  todoReducer,
} from "./util";

const AddTask = () => {
  const  dispatch = useContext(TodoDispatchContext);
  const [todoVal, setTodoVal] = useState("");
  return (
    <>
      <input
        type="text"
        value={todoVal}
        onChange={(ev) => {
          setTodoVal(ev.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch({
            type: "added_todo",
            taskName: todoVal,
          });
          setTodoVal('')
        }}
      >
        Add
      </button>
    </>
  );
};

export const TodoWrapper = () => {
  const [todos, dispatch] = useReducer(todoReducer, initState);
  return (
    <>
      <TodoContext.Provider value={todos}>
        <TodoDispatchContext.Provider value={dispatch}>
          <AddTask />
          <TodoList />
        </TodoDispatchContext.Provider>
      </TodoContext.Provider>
    </>
  );
};
