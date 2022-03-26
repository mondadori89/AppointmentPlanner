import React from "react";

export const TileList = (props) => {
  const { contact } = props;
  return (
    <div>
      <ul>
          {contact.map((each) => (
            <li key={each.id}>
              <p>Name: {each.name} / E-mail: {each.email} / Phone number: {each.phoneNumber}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};
