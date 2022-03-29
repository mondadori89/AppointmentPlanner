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
            type="tel"
            name="phoneNumber"
            placeholder="Phone Number Format: 12 34567-8900"
            onChange={handleChange}
            pattern="[0-9]{2} [0-9]{5}-[0-9]{4}"
            required
          />
          <button type="submit">Submit</button>
        </form> 
  );
};
