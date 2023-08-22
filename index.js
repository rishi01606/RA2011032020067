// AllTrains.js
import React, { useEffect, useState } from 'react';
import { fetchTrainSchedules } from './api';

function AllTrains() {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    async function getTrainSchedules() {
      try {
        const data = await fetchTrainSchedules();
        // Process the data to filter and sort as per requirements
        setTrains(data);
      } catch (error) {
        console.error('Error fetching train schedules', error);
      }
    }
    getTrainSchedules();
  }, []);

  return (
    <div>
      <h1>All Trains</h1>
      {/* Render train schedule data */}
      {/* You can use a mapping function to render train information */}
    </div>
  );
}

export default AllTrains;

