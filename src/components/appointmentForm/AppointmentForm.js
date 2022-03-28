import React from "react";
import { ContactPicker } from "../../components/contactPicker/ContactPicker.js";

export const AppointmentForm = (props) => {
  const { contact, appointment, setAppointment, appointmentInfo, setAppointmentInfo } = props;

  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setAppointmentInfo(prev => ({
      ...prev,
      [name]: value,
      id: Date.now()
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setAppointment((prev) => { return [appointmentInfo, ...prev]; })
    setAppointmentInfo({});
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        value={appointmentInfo.title || ''}
        name="title"
        type="text"
        placeholder="Title"
        onChange={handleChange}
        required
        />
      <input 
        value={appointmentInfo.date || ''}
        name="date"
        type="date"
        placeholder="Date"
        onChange={handleChange}
        min={getTodayString()}
        required
      />
      <input 
        value={appointmentInfo.time || ''}
        name="time"
        type="time"
        placeholder="Time"
        onChange={handleChange}
        required
      />
      <label htmlFor="dropdown">Select contact</label>
      <ContactPicker 
        contact={contact}
        appointmentInfo={appointmentInfo}
        handleChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

