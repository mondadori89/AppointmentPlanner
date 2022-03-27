import React from "react";

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
        type="text"
        placeholder="Date"
        onChange={handleChange}
        required
      />
      <input 
        value={appointmentInfo.time || ''}
        name="time"
        type="text"
        placeholder="Time"
        onChange={handleChange}
        required
      />
      <label htmlFor="dropdown">Select contact</label>
      <select 
        name="contactSelected"
        value={appointmentInfo.contactSelected || ''}
        onChange={handleChange}
        required
        > 
        <option defaultValue>Select a contact</option>
        <option value="Contact 1">Contact 1</option>
        <option value="Contact 2">Contact 2</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
};



/*

Appointment Form: 
Title (input)
date (input)
time (input)
Contact picker (dropdown list of contacts)


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

*/