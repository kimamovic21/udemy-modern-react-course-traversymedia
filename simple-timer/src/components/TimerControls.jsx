import { useRef, useEffect } from 'react';

const TimerControls = ({ isRunning, onToggle, onReset }) => {
  const startButtonRef = useRef(null);

  useEffect(() => {
    if (startButtonRef.current) {
      startButtonRef.current.focus();
    }
  }, []);

  return (
    <div className='flex flex-col gap-2'>
      <button
        ref={startButtonRef}
        onClick={onToggle}
        className='bg-green-500 w-full text-white px-4 py-2 cursor-pointer rounded hover:bg-green-600'
      >
        {isRunning ? 'Pause' : 'Start'}
      </button>
      <button
        onClick={onReset}
        className='bg-red-500 w-full text-white px-4 py-2 cursor-pointer rounded hover:bg-red-600'
      >
        Reset
      </button>
    </div>
  );
};

export default TimerControls;