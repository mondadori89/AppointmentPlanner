import React from "react";

export const ContactForm = ({
  profile,
  handleChange,
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
       <form onSubmit={handleSubmit}>
          <input
            value={profile.firstName || ''}
            name="firstName"
            type="text"
            placeholder="First Name"
            onChange={handleChange}
          />
          <input
            value={profile.lastName || ''}
            type="text"
            name="lastName"
            placeholder="Last Name"
            onChange={handleChange}
          />
          <input
            value={profile.phoneNumber || ''}
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form> 
  );
};

