function getRectangleArea(width, height) {
  return width * height;
};

const getRectangleArea = (width, height) => {
  return width * height;
};

const getRectangleArea = (width, height) => width * height;

const sayHello = () => console.log('Hello!');

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((number) => number * 2);

regular();
arrow();

function regular() {
  console.log('Regular');
};

const arrow = () => console.log('arrow');

const person = {
  name: 'Brad',
  sayHelloRegular: function () {
    console.log('Regular:', this.name);
    console.log(this);
  },
  sayHelloArrow: () => {
    console.log('Arrow:', this.name);
    console.log(this);
  },
};
