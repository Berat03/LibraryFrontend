import React from "react";
export default function TimeDay() {
  const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

  const today = new Date();
  const day = days[today.getDay()];
  const date = today.getDate(); // This gets the date of the month
  const month = months[today.getMonth()];

  return (
      <div>
          <h1 className=" p-2 font-bold text-white text-3xl ">{`${day} ${date} ${month}`}</h1> {/* Use date here instead of monthNumber */}
      </div>
  )
}
