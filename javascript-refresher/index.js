const notes = [
  { title: 'Meeting Notes', content: 'Discuss project roadmap' },
  { title: 'Grocery List', content: 'Buy milk, eggs, bread' },
  { title: 'Workout Plan', content: 'Push day: Bench, Shoulder Press' },
  { title: 'Recipe Ideas', content: 'Pasta, Salad, Tacos' },
];

// const [firstNote, secondNote] = notes;
// console.log(firstNote);
// console.log(secondNote.title); 

const [firstNote, ...otherNotes] = notes;
console.log(firstNote);
console.log(otherNotes);


// const note = {
//   title: 'Meeting Notes',
//   content: 'Discuss project roadmap',
//   isPinned: true,
// };

// const { title, content } = note;
// console.log(title);
// console.log(content);

const { title: noteTitle, content: noteContent } = note;
console.log(noteTitle);
console.log(noteContent);


const user = {
  name: 'Ben',
  address: { city: 'Boston', state: 'MA' },
};


const {
  address: { city },
} = user;
console.log(city);


const note = {
  title: 'Meeting Notes',
  content: 'Discuss project roadmap',
  isPinned: true,
  tags: ['meeting', 'roadmap', 'planning'],
};


// const {
//   title,
//   content,
//   tags: [firstTag],
// } = note;
// console.log(firstTag);


const {
  title,
  content,
  tags: [firstTag, ...otherTags],
} = note;
