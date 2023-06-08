import React, { useState, useEffect } from 'react';

const CountDown = () => {
  const [count, setCount] = useState(100);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);

    // Clear the interval when the component is unmounted or count reaches 0
    if (count === 0) {
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  }, [count]);

  return (
    <div>
      <h1>Countdown: {count}</h1>
    </div>
  );
};

export default CountDown;