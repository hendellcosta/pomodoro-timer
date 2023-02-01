import { useState, useEffect } from "react";
import { RiPauseMiniFill } from "react-icons/ri";
import { RiPlayMiniFill } from "react-icons/ri";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Timer() {


  const [minutesValue, setMinutesValue] = useState(25);
  const [secondsValue, setSecondsValue] = useState(0);

  const [isPaused, setIsPaused] = useState(false);
  const [intervalId, setIntervalId] = useState(null);
  const percentage = Math.round((minutesValue / 60) * 100);
  const [displayInfo, setDisplayInfo] = useState(false);

  const minutes = minutesValue < 10 ? `0${minutesValue}` : minutesValue;
  const seconds = secondsValue < 10 ? `0${secondsValue}` : secondsValue;

  useEffect(() => {
    let interval = setInterval(() => {
      if (isPaused) {
        if (secondsValue === 0) {
          if (minutesValue !== 0) {
            setSecondsValue(59);
            setMinutesValue(minutesValue - 1);
          } else {
            let minutesValue = displayInfo ? 24 : 4;
            let secondsValue = 59
            
            setMinutesValue(minutesValue);
            setSecondsValue(secondsValue);
            setDisplayInfo(!displayInfo)
          }
        } else {
          setSecondsValue(secondsValue - 1);
        }
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [secondsValue, isPaused, minutesValue]);

  function handlePause() {
    setIsPaused(!isPaused);
  }

  return (
    <main className="flex items-center justify-center h-[100vh] w-[100vw] absolute">
      <div className="text-6xl flex flex-col gap-16">
        {/*<span>
          {minutes}:{seconds}
  </span>*/}

        <div className="flex flex-col gap-6 justify-center items-center">
          <CircularProgressbar
            value={percentage}
            text={`${minutes}:${seconds}`}
            styles={buildStyles({
              textColor: "#fff",
              pathColor: "#eee",
              trailColor: "#3e98c7",
            })}
          />

          <button
            onClick={handlePause}
            className="border rounded-full bg-white text-[#30384b]"
          >
            {!isPaused ? <RiPlayMiniFill /> : <RiPauseMiniFill />}
          </button>

          {displayInfo && <p>Break Time!</p>}
        </div>
      </div>
    </main>
  );
}

export default Timer;
