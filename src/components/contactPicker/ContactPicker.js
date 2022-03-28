import React from "react";

export const ContactPicker = (props) => {
  const { contact, appointmentInfo, handleChange } = props;

  return (
    <select 
      name="contactSelected"
      value={appointmentInfo.contactSelected || ''}
      onChange={handleChange}
      required
      > 
      <option key='noContact' value='No contact is selected.' selected="selected" >Select a contact</option>
      {contact.map((each) => (
        <option key={each.id} value={each.name} > {each.name} </option>
      ))}
    </select>
  );
};


