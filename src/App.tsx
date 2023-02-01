import { useEffect, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function App() {

  

  const [minutesValue, setMinutesValue] = useState(0)
  const [secondsValue, setSecondsValue] = useState(0)

  const minutes = minutesValue < 10 ? `0${minutesValue}` : minutesValue;
  const seconds = secondsValue < 10 ? `0${secondsValue}` : secondsValue;

  useEffect(() => {
    let interval = setInterval(() => {
      clearInterval(interval);

      if (secondsValue === 0) {
        if (minutesValue !== 0) {
          setSecondsValue(59);
          setMinutesValue(minutesValue - 1);
      } else {

      } }

      else {
        setSecondsValue(secondsValue - 1);
      }
    }, 1000);
  }, [secondsValue])

  return (
    <main className=''>
      <div className='timer'>
        <input type="" placeholder='How much time?' className='rounded-full' />
      </div>

      <div>
      </div>
    </main>
  )
}

export default App






























{/*
<CircularProgressbar value={time} text={`${minutes}:${seconds}`} styles={buildStyles({
rotation: 0.25,
strokeLinecap: 'butt',
pathTransitionDuration: 0.5,
pathColor: `rgba(62, 152, 199, ${time / 100})`,
textColor: '#3e98c7',
trailColor: '#3e98c7',
backgroundColor: '#3e98c7'
})} /> */}