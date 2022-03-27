import React from "react";

export const Tile = (props) => {
  const { object } = props;

  return (
    <div className="tile-container">
      <p>{object.name ? 'Name:' : ''} {object.name} </p>
      <p>{object.email ? 'E-mail:' : ''} {object.email} </p>
      <p>{object.phoneNumber ? 'Phone number:' : ''} {object.phoneNumber} </p>
      <p>{object.title ? 'Title:' : ''} {object.title} </p>
      <p>{object.date ? 'Date:' : ''} {object.date} </p>
      <p>{object.time ? 'Time:' : ''} {object.time} </p>
      <p>{object.contactSelected ? 'Contact selected:' : ''} {object.contactSelected} </p>
    </div>
  );
};

