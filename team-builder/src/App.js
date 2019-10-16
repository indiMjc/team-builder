import React, { useState } from "react";
import data from "./data";
import "./App.css";
import Form from "./components/Form";
// import MembersList from "./components/MembersList";

function App() {
  const [member, setMember] = useState(data);

  const addMember = _member => setMember([...member, _member]);

  return (
    <div className="App">
      <h1>Members List:</h1>
      {/* <MembersList members={member} /> */}
      {member.map((person, i) => (
        <div key={i++}>
          <p key={person.name}>Name: {person.name}</p>
          <p key={person.email}>Email: {person.email}</p>
          <p key={i}>Role: {person.role}</p>
        </div>
      ))}
      <Form addNew={addMember} />
    </div>
  );
}

export default App;
