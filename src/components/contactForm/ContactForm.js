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
            required
          />
          <button type="submit">Submit</button>
        </form> 
  );
};

// Como se coloca o pattern no React???     pattern="((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}"