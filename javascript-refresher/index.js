// const number = 5;
// let message;

if (number % 2 === 0) {
  message = 'Even Number';
} else {
  message = 'Odd Number';
};

console.log(message);

const number = 5;
const message = number % 2 === 0 ? 'Even Number' : 'Odd Number';
console.log(message);


const note = {
  title: 'Meeting Notes',
  content: 'Discuss project roadmap...',
  timestamp: Date.now(),
  isPinned: true,
};

const noteText = `Title: ${note.title}`;
console.log(noteText);

console.log(false && 'Hello');
console.log(true && 'Hello');


const isLoggedIn = true;

function showWelcome() {
  return isLoggedIn && 'Welcome, User!';
};

console.log(showWelcome());