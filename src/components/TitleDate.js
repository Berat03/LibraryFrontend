import React from "react";
export default function TitleDate() {
  const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

  const today = new Date();
  const day = days[today.getDay()];
  const monthNumber = today.getMonth() + 1;
  const month = months[today.getMonth()];

  // is there a better way to do this?

  return (
      <div>
          <h1>{`${day} ${monthNumber} ${month}`}</h1>
      </div>

  )
}

