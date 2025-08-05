import { BarLoader } from 'react-spinners';

const override = {
  display: 'block',
  margin: '0 auto',
};

const Spinner = ({ color = 'blue', size = '150' }) => {
  return (
    <div>
      <BarLoader
        color={color}
        cssOverride={override}
        size={size}
        aria-label='Loading Spinner'
        data-testid='loader'
      />
    </div>
  );
};

export default Spinner;