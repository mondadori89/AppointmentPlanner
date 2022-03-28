import React, { useState } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  const [contact, setContact] = useState([]);
  const [appointment, setAppointment] = useState([]);

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
            <ContactsPage 
              contact={contact} 
              setContact={setContact}
            />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            <AppointmentsPage 
            contact={contact}
            appointment={appointment} 
            setAppointment={setAppointment}
            />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;


// at ContactForm:  HTML form Patterns don't work on react... How should I do it?     pattern="((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}"
// at AppointmentForm:  The min={getTodayString} had no effect...
// at ContactPicker:  When I select no option on the ContactPicker, it goes blank instead of "No contact selected."