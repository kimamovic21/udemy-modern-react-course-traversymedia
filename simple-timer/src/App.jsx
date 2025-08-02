import { useState, useRef } from 'react';

const App = () => {
  const timerRef = useRef(null);
  console.log(timerRef);

  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const toggleTimer = () => {
    if (isRunning) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    } else {
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    };
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    clearInterval(timerRef.current);
    setIsRunning(false);
    setTime(0);
    timerRef.current = null;
  };

  return (
    <div className='max-w-md mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-lg text-center'>
      <h2 className='text-4xl font-semibold mt-4'>
        ⏳ Timer: {time} sec
      </h2>
      <div className='flex gap-2 justify-center mt-2'>
        <button
          onClick={toggleTimer}
          className='bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 cursor-pointer'
        >
          {isRunning ? 'Pause' : 'Start'}
        </button>
        <button
          onClick={resetTimer}
          className='bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 cursor-pointer'
        >
          Reset
        </button>
      </div>

    </div>
  );
};

export default App;