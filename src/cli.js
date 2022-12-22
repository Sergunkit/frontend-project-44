import readlineSync from 'readline-sync';

let name = '';
const greating = () => {
  console.log('brain-games\nWelcome to the Brain Games!');
  name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
};

export { greating, name };
