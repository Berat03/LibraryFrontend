import React, { useState, useEffect } from 'react';
import { apiEndpoint } from "../apiEndpoint";

export default function GetRecentAPI() {
  const [data, setData] = useState(null);
  const [limit, setLimit] = useState(5);

  const fetchData = () => {
    fetch(`${apiEndpoint}?limit=${limit}`)
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
      <input
        type="number"
        value={limit}
        onChange={e => setLimit(e.target.value)}
        placeholder="Set limit"
      />
      <button onClick={fetchData}>Fetch Data</button>
    </div>
  );
}
