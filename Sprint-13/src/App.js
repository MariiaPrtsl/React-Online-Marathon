import React, { useState } from "react";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import "./App.css";
import Subtask1 from "./subtask1";
import Subtask2 from "./subtask2";
import Subtask3 from "./subtask3";
import Subtask4 from "./subtask4";
import PrivateRoute from "./PrivateRoute";

export default function App() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState(false);

  const inputHandler = (e) => {
    let value = e.target.value;

    value !== "" && value % 2 !== 0
      ? setInputValue(true)
      : setInputValue(false);
  };

  return (
    <div className="App">
      <h1>React Marathon</h1>
      <h2>The topic 'Routes'</h2>
      <Link to="/subtask3">Show protected information if</Link>
      <span>&nbsp;</span>
      <input size="5" onChange={inputHandler}></input> is odd
      <div className="mainClass">
        Go to the component programmatically, by checking the box:{" "}
        <input
          onChange={(e)=>navigate(e.target.checked ? "/subtask4" : "/")}
          type="checkbox"
        ></input>
      </div>
      <Routes>
        <Route path="/subtask1/:id" element={<Subtask1 />} />
        <Route path="/subtask2/" element={<Subtask2 />} />
        <Route element={<PrivateRoute inputValue={inputValue} />}>
          <Route path="/subtask3" element={<Subtask3 />} />
        </Route>
        <Route path="/subtask4" element={<Subtask4 />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
        <Link to="/" />
    </div>
  );
}