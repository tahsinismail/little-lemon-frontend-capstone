import React, { createContext, useState } from "react";
import BookingConfirmDialog from "./AlertDialog";

export const BookingPageContext = createContext(undefined, undefined);
const BookingPage = () => {
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const resTime = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    setIsAlertOpen(true);
  };
  return (
    <>
      <BookingPageContext.Provider value={[isAlertOpen, setIsAlertOpen]}>
        <BookingConfirmDialog
          alertTitle="Reservation successful"
          alertDescription="The similarity between daydreaming and this reservation is that both don't exist. :)"
          alertBtnText="Got it, Thanks!"
        />
      </BookingPageContext.Provider>
      <div className="flex justify-center ">
        <h1 className="border bg-[#495e57] border-[#495e57] px-8 py-2 -mb-1 rounded-tl-2xl rounded-tr-2xl text-white text-xl lg:text-2xl">
          Reserve a table
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-start lg:items-center mx-4 px-8 py-4 bg-[#495e57] rounded-2xl">
        <div className="w-full p-4 rounded-2xl">
          <img
            src="./table.jpg"
            alt="Restaurant Table"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
        <form className="w-full flex flex-col p-4 " onSubmit={handleSubmit}>
          <label
            for="res-date"
            className="text-lg font-semibold my-1 text-white"
          >
            Choose date
          </label>
          <input
            type="date"
            id="res-date"
            className="p-2.5 rounded-2xl"
            required
          />
          <label
            for="res-time"
            className="text-lg font-semibold my-1 text-white"
          >
            Choose time
          </label>
          <select id="res-time" className="py-3 px-2 rounded-2xl" required>
            {resTime.map((time, index) => (
              <option key={index}>{time}</option>
            ))}
          </select>
          <label for="guests" className="text-lg font-semibold my-1 text-white">
            Number of guests
          </label>
          <input
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="guests"
            className="py-2.5 px-3 rounded-2xl"
            required
          />
          <label
            for="occasion"
            className="text-lg font-semibold my-1 text-white"
          >
            Occasion
          </label>
          <select id="occasion" className="py-3 px-2 rounded-2xl" required>
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
          <button
            type="submit"
            value="Make Your reservation"
            className="bg-[#f4ce14] p-2.5 mt-5 rounded-2xl font-semibold"
          >
            Make Your reservation
          </button>
        </form>
      </div>
    </>
  );
};

export default BookingPage;
