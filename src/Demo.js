import React from "react";
import App from "./App";
import Sidebar from "./Task";
import Trending from "./TaskApp";
import Profile from "./TaskForm";
import Feed from "./";

export default function Demo() {
  return (
    <div>
      <App>
        <Sidebar>
          <PageLink />
          <PageLink />
        </Sidebar>

        <Profile />

        <Feed>
          <Tweet />
          <Tweet />
        </Feed>

        <Trending />
      </App>
    </div>
  );
}
