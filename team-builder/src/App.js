import React, { useState } from "react";
import data from "./data";
import "./App.css";
import Form from "./components/Form";
import MembersList from "./components/MembersList";

function App() {
  const [member, setMember] = useState(data);

  const addMember = _member => setMember([...member, _member]);

  console.log(typeof member, "t1");

  return (
    <div className="App">
      <h1>Members List:</h1>
      <MembersList members={member} />
      <Form addNew={addMember} />
    </div>
  );
}

export default App;
