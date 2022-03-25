import React, { useState } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm.js";

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
    setContact((prev) => { return [profile, ...prev]; })
    setProfile({});
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

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
        <ul>
          {contact.map((each) => (
            <li key={each.id}>
              <p>Name: {each.firstName} {each.lastName}</p>
              <p>Phone number: {each.phoneNumber}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

/*

*/