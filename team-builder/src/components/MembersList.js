import React from "react";

const MembersList = props => {
  console.log(typeof props);
  return (
    <>
      {console.log(typeof props.members)}
      {props.members.map((person, i) => (
        <div key={i++}>
          <p key={person.name}>Name: {person.name}</p>
          <p key={person.email}>Email: {person.email}</p>
          <p key={i}>Role: {person.role}</p>
        </div>
      ))}
    </>
  );
};

export default MembersList;
