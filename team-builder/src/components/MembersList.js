import React from "react";

const MembersList = props => {
  return (
    <div className="members-card">
      {props.members.map((person, i) => (
        <div key={i++}>
          <p key={person.name}>Name: {person.name}</p>
          <p key={person.email}>Email: {person.email}</p>
          <p key={i}>Role: {person.role}</p>
        </div>
      ))}
    </div>
  );
};

export default MembersList;
