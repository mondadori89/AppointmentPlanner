import React from "react";

export const ContactForm = ({
  profile,
  handleChange,
  handleSubmit
}) => {
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