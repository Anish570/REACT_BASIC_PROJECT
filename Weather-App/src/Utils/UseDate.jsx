import React, { useState, useEffect } from 'react';

const LocalTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []); // Empty dependency array means this effect runs only once after the component mounts

  const formattedTime = currentTime.toLocaleTimeString();

  return (
    <div>
      <h2>Local Time:</h2>
      <p>{formattedTime}</p>
    </div>
  );
};

export default LocalTime;
