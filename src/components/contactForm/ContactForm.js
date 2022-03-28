import React from "react";

export const ContactForm = ({
  profile,
  setProfile,
  contact,
  setContact
}) => {

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setProfile(prev => ({
      ...prev,
      [name]: value,
      id: Date.now()
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const checkContact = obj => obj.name === profile.name;
    if (contact.some(checkContact)) {
      alert('This contact is already on your list...');
      return;
    }
    setContact((prev) => { return [profile, ...prev]; })
    setProfile({});
  };

  return (
       <form onSubmit={handleSubmit}>
          <input
            value={profile.name || ''}
            name="name"
            type="text"
            placeholder="Name"
            onChange={handleChange}
            required
          />
          <input
            value={profile.email || ''}
            type="text"
            name="email"
            placeholder="E-mail"
            onChange={handleChange}
            required
          />
          <input
            value={profile.phoneNumber || ''}
            type="number"
            name="phoneNumber"
            placeholder="Phone Number"
            onChange={handleChange}
            pattern="^\s*\(?(020[7,8]{1}\)?[ ]?[1-9]{1}[0-9{2}[ ]?[0-9]{4})|(0[1-8]{1}[0-9]{3}\)?[ ]?[1-9]{1}[0-9]{2}[ ]?[0-9]{3})\s*$"
            required
          />
          <button type="submit">Submit</button>
        </form> 
  );
};

// HTML form Patterns don't work on react? How should I do it?     pattern="((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}"