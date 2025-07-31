import Rating from './components/Rating';

const App = () => {
  return (
    <div>
      <Rating
        heading='How do you feel about React?'
        color='blue'
        feedbackMessages={[
          'Hate it', 'Dislike it', 'Meh', 'Like it', 'Love it'
        ]}
      />
    </div>
  );
};

export default App;