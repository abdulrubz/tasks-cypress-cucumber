import React from "react";
import Button from "./Button";
import "./Tasks.css";

export const Task = ({ task, removeTask }) => {
  return (
    <div className="Task">
      <tr className="taskCell" key={task.title}>
        <td className="taskTitle">{task.title}</td>
        <td>
          <Button
            classes="deleteButton"
            text="❌"
            clickFunction={() => removeTask(task.title)}
          />
        </td>
      </tr>
    </div>
  );
};

export default Task;
