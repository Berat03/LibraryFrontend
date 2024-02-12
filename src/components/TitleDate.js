import React from "react";
export default function TitleDate() {
  const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

  const today = new Date();
  const day = days[today.getDay()];
  const date = today.getDate(); // This gets the date of the month
  const month = months[today.getMonth()];

  return (
      <div>
          <h1>{`${day} ${date} ${month}`}</h1> {/* Use date here instead of monthNumber */}
      </div>
  )
}
