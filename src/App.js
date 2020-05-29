import React from "react";
import "./App.css";
import TaskApp from "./TaskApp";
import Counter from "./Counter";

function App() {
  return (
    <div className="App">
      {/* <TaskApp /> */}
      <TaskApp />
      <a href="/api">Go to Google</a>
    </div>
  );
}

export default App;
