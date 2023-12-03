import React, { useState } from "react";

const BookingPage = () => {
  const [resTime, setResTime] = useState([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);
  return (
    <form>
      <label for="res-date">Choose date</label>
      <input type="date" id="res-date" />
      <label for="res-time">Choose time</label>
      <select id="res-time ">
        {resTime.map((time, index) => (
          <option key={index}>{time}</option>
        ))}
      </select>
      <label for="guests">Number of guests</label>
      <input type="number" placeholder="1" min="1" max="10" id="guests" />
      <label for="occasion">Occasion</label>
      <select id="occasion">
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <input type="submit" value="Make Your reservation" />
    </form>
  );
};

export default BookingPage;
