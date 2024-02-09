import React, { useState, useEffect } from 'react';
import { apiEndpoint } from "../apiEndpoint";

export default function GetRecentAPI() {
  const [data, setData] = useState(null);

  const fetchData = () => {
    fetch(apiEndpoint)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(json => setData(json))
      .catch(error => console.error(error));
  };

  useEffect(() => {
    console.log("Data updated:", data);
  }, [data]);

  return (
    <div>
      <button onClick={fetchData}>BUTTON</button>
    </div>
  );
}
