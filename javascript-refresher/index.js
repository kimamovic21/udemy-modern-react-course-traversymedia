const username = 'John';

// const greeting = 'Hello, ' + name;
const greeting = `Hello, ${username}`;

const formatDate = (timestamp) => {
  const date = new Date(timestamp);
  // return date.toLocaleDateString() + ' at ' + date.toLocaleTimeString();
  return `${date.toLocaleDateString()} at ${date.toLocaleTimeString()}`;
};

const note = {
  title: 'Discuss project roadmap',
  timestamp: Date.now(),
};

console.log(`Last edited: ${formatDate(note.timestamp)}`);