import React, { useState } from "react";
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm.js"
import { TileList } from "../../components/tileList/TileList.js";

export const AppointmentsPage = (props) => {
  const { contact, appointment, setAppointment } = props;
  const [appointmentInfo, setAppointmentInfo] = useState({});

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm 
          appointmentInfo={appointmentInfo}
          setAppointmentInfo={setAppointmentInfo}
          contact={contact}
          appointment={appointment}
          setAppointment={setAppointment}
        />   
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList 
          objectsArray={appointment}
        />
      </section>
    </div>
  );
};

