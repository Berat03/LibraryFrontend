import React from "react";

export default function BusyBar({ value }) {
  let category;

  // Determine the category based on the value
  if (value >= 1600) {
    category = "Quiet";
  } else if (value >= 1200) {
    category = "Normal";
  } else if (value >= 700) {
    category = "Busy";
  } else {
    category = "Crowded";
  }

  const getClasses = (cat) =>
    cat === category
      ? "text-white bg-gray-100 rounded-lg bg-opacity-30"
      : "text-gray-900 bg-gray-100 rounded-lg bg-opacity-30";

  return (
    <div className="flex flex-col text-3xl font-extrabold">
      <div className={`${getClasses("Crowded")} p-2`}>CROWDED</div>
      <div className={`${getClasses("Busy")} p-2`}>BUSY</div>
      <div className={`${getClasses("Normal")} p-2`}>NORMAL</div>
      <div className={`${getClasses("Quiet")} p-2`}>QUIET</div>
    </div>
  );
}
