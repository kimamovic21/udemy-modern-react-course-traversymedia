const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise resolved!');
  }, 2000);
});

myPromise.then((data) => {
  console.log(data);
});


const myPromise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Promise rejected!');
  }, 2000);
});

myPromise2
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });


fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });


const fetchData = async () => {
  try {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/posts/1'
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  };
};

fetchData();