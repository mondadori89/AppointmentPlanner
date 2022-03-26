import React, { useState } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm.js";
import { TileList } from "../../components/tileList/TileList.js";

export const ContactsPage = (props) => {
  const { contact, setContact } = props;
  const [profile, setProfile] = useState({});

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
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm 
          handleSubmit={handleSubmit}
          profile={profile}
          handleChange={handleChange}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList 
          contact={contact}
        />
      </section>
    </div>
  );
};

/*

*/