import React from "react";
import { Route, Routes } from "react-router-dom";
import Todolist from "./components/Todolist";
import Login from "./components/Login";
import "./App.css";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/todo" element={<Todolist />}></Route>
      </Routes>
    </>
  );
}

export default App;
