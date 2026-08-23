import { useEffect, useState } from "react";

const Countdown = ({ releaseDate }) => {
  const calculateTime = () => {
    const difference = new Date(releaseDate) - new Date();

    if (difference <= 0) {
      return null;
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor(
        (difference / (1000 * 60 * 60)) % 24
      ),
      minutes: Math.floor(
        (difference / (1000 * 60)) % 60
      ),
    };
  };

  const [timeLeft, setTimeLeft] = useState(
    calculateTime()
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTime());
    }, 60000);

    return () => clearInterval(timer);
  }, [releaseDate]);

  if (!timeLeft) {
    return (
      <span className="released">
        Released
      </span>
    );
  }

  return (
    <div className="countdown">
      <span>{timeLeft.days}d</span>
      <span>{timeLeft.hours}h</span>
      <span>{timeLeft.minutes}m</span>
    </div>
  );
};

export default Countdown;