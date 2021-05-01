const people = [
  {name: 'Lek', position: 'Father'},
  {name: 'Kan', position: 'Wife'},
  {name: 'DotOne', position: 'Daughter'},
];

export default () => {
  return new Promise(resolve => {
    setTimeout(() => {
      // return resolve({
      //   people: people,
      // });
      return resolve(people);
    }, 3000);
  });
};
