import { useState, useEffect } from "react";

const ClockWidget = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(timerID);
  }, []);

  return (
    <div>
      <h2>{date.toLocaleTimeString()}</h2>
    </div>
  );
};

export default ClockWidget;
