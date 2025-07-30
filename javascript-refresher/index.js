const notes = [
  { title: 'Meeting Notes', content: 'Discuss project roadmap', isPinned: true },
  { title: 'Grocery List', content: 'Buy milk, eggs, bread', isPinned: false },
  { title: 'Workout Plan', content: 'Push day: Bench, Shoulder Press', isPinned: false },
  { title: 'Recipe Ideas', content: 'Pasta, Salad, Tacos', isPinned: false },
];

// const noteTitles = notes.map((note) => note.title);
const noteTitles = notes.map((note, index) => `${index + 1}. ${note.title}`);
console.log(noteTitles);


const pinnedNotes = notes.filter((note) => note.isPinned);
console.log(pinnedNotes);

const pinnedNoteTitles = notes
  .filter((note) => note.isPinned)
  .map((note) => note.title);
console.log(pinnedNoteTitles);


const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((total, number) => total + number, 0);
console.log(sum);

const totalCharacters = notes.reduce(
  (total, note) => total + note.content.length,
  0
);
console.log(totalCharacters);


notes.forEach((note) => console.log(note.title));