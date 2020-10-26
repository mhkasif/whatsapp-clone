import logo from "./logo.svg";
import "./App.scss";
import Sidebar from "./Sidebar/Sidebar";
import Chat from "./Chat/Chat";
import { Route, Router, Switch } from "react-router-dom";
import { useState } from "react";
import Login from "./Login/Login";
import { useStateValue } from "./Hooks/StateProvider";

function App() {
  const [{user},setUser]=useStateValue()
  return (
    !user?<Login/>:
    <div className="app">
      <div className="app__body">

          {/* sidebar */}
          <Sidebar />
          {/* chat */}
          <Switch>
            <Route path="/:id">
              <Chat />
            </Route>
            <Route path="/" />
          </Switch>

      </div>
    </div>
  );
}

export default App;
