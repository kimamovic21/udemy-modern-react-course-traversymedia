const notes = ['Meeting Notes', 'Grocery List'];
notes.push('Workout Plan');
console.log(notes);


const notes2 = ['Meeting Notes', 'Grocery List'];
const newNotes = [...notes, 'Workout Plan'];
console.log(notes2);
console.log(newNotes);


const newNotes2 = notes.map((note) =>
  note === 'Grocery List' ? 'Shopping List' : note
);

const user = {
  name: 'John Doe',
  age: 30,
};

user.age = 31;
console.log(user);

const user = {
  name: 'John Doe',
  age: 30,
};

const newUser = { ...user, age: 31 };
console.log(user);
console.log(newUser);