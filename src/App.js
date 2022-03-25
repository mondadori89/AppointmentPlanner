import React, { useState } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  
  //const [contact, setContact] = useState([]);
  const [appointment, setAppointment] = useState([]);

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  /*const addContact = (newContact) => {
    setContact((prev) => {
      return [newContact, ...prev];
    })
  }
*/
  const addAppointment = (newAppointment) => {
    setAppointment((prev) => {
      return [newAppointment, ...prev];
    })
  }

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
            <ContactsPage />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            <AppointmentsPage addAppointment={addAppointment} />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
