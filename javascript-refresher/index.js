const user = {
  name: 'John',
};

console.log(user.address.city);


const user2 = {
  name: 'John',
};

let value = null;
let result = value ?? 'Default Value';

console.log(result);


let value2 = 0;
let result2 = value2 ?? 'Default Value';

console.log(result2);


const user3 = {
  name: 'John',
};

console.log(user3.address?.city ?? 'Unknown');
