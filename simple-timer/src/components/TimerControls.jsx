const TimerControls = ({ isRunning, onToggle, onReset }) => {
  return (
    <div className='flex flex-col gap-2'>
      <button
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