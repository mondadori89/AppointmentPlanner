import React, { useState } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm.js";
import { TileList } from "../../components/tileList/TileList.js";

export const ContactsPage = (props) => {
  const { contact, setContact } = props;
  const [profile, setProfile] = useState({});

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm 
          profile={profile}
          setProfile={setProfile}
          contact={contact}
          setContact={setContact}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList 
          objectsArray={contact}
        />
      </section>
    </div>
  );
};

/*

*/