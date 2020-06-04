import React, { useState } from "react";
import Button from "./Button";
import "./Tasks.css";

export const Task = ({ task, removeTask }) => {
  const [status, setStatus] = useState(false);
  return (
    <div className="Task">
      <tr className="taskCell" key={task.title}>
        <td
          onClick={() => setStatus(!status)}
          className={status ? "taskTitle completed" : "taskTitle"}
        >
          {task.title}
        </td>
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
