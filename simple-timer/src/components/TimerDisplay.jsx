const TimerDisplay = ({ time }) => {
  return (
    <h2 className='text-4xl font-semibold my-4'>
      ⏳ Timer: {time} sec
    </h2>
  );
};

export default TimerDisplay;