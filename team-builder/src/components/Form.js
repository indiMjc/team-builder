import React, { useState } from "react";

const Form = props => {
  const [newMember, setNewMember] = useState({
    name: "",
    email: "",
    role: ""
  });

  const changeHandler = event => {
    setNewMember({ ...newMember, [event.target.name]: event.target.value });
  };

  const submitForm = event => {
    event.preventDefault();
    props.addNew(newMember);
    setNewMember({
      name: "",
      email: "",
      role: ""
    });
  };

  return (
    <>
      <h4>Add New Members:</h4>
      <form onSubmit={submitForm}>
        <label>
          Enter Name:
          <input
            name="name"
            id="name"
            type="text"
            placeholder="name"
            onChange={changeHandler}
            value={newMember.name}
          />
        </label>
        <br />
        <label>
          Enter Email:
          <input
            name="email"
            id="email"
            type="text"
            placeholder="email"
            onChange={changeHandler}
            value={newMember.email}
          />
        </label>
        <br />
        <label>
          Enter Role:
          <input
            name="role"
            id="role"
            type="text"
            placeholder="role"
            onChange={changeHandler}
            value={newMember.role}
          />
        </label>
        <br />
        <button type="submit">Add Member</button>
      </form>
    </>
  );
};

export default Form;
