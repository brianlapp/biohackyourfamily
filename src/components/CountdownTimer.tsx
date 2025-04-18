
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  const location = useLocation();
  const isPastEvent = location.pathname === '/past-events';

  useEffect(() => {
    if (isPastEvent) {
      setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      return;
    }

    const eventDate = new Date('2025-03-14T18:00:00');
    
    const timer = setInterval(() => {
      const now = new Date();
      const difference = eventDate.getTime() - now.getTime();
      
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      
      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, [isPastEvent]);

  return (
    <div className="grid grid-cols-4 gap-4 max-w-xs mx-auto my-8">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="text-center">
          <div className="text-3xl font-bold bg-white rounded-lg shadow-sm p-3 animate-fade-in">
            {value}
          </div>
          <div className="text-sm mt-2 capitalize text-muted-foreground">
            {unit}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
