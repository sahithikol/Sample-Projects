import React, { useContext } from "react";
import { TodoContext } from "./util";

const Task = ({ task }) => {
  return <div>{task.taskName}</div>;
};

export const TodoList = () => {
  const { todoTasks } = useContext(TodoContext);
  return (
    <ul>
      {todoTasks.map((task) => (
        <li key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
