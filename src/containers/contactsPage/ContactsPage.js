import React, { useState } from "react";
import { ContactsForm } from "../../components/contactForm/ContactForm.js";

export const ContactsPage = () => {
  /*
  Define state variables for 
  contact info and duplicate check
  */

  const [profile, setProfile] = useState({});
  const [contactList, setContactList] = useState([]);

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
    alert(JSON.stringify(profile, '', 2));
    setContactList((prev) => { return [profile, ...prev]; })
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
        <form  onSubmit={handleSubmit}>
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
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <ul>
          {contactList.map((each) => (
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