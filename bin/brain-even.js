#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { name, greating } from '../src/cli.js';

const isEven = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const number = Math.ceil(Math.random() * 10);
  const even = number % 2 === 0;
  const answer = (readlineSync.question(`Question: ${number} `));
  console.log(`Your answer: ${answer}`);
  if ((even && answer === 'yes') || (!even && answer === 'no')) {
    console.log('Correct!');
    return 1;
  }
  console.log(`${answer} is wrong answer ;(. Correct answer was '${even ? 'yes' : 'no'}'.`);
  console.log(`Let's try again, ${name}!`);
  return 0;
};
greating();
let correctAnswer = 0;
for (let i = 0; i < 3; i += 1) {
  correctAnswer += isEven();
}
if (correctAnswer === 3) {
  console.log(`Congratulations, ${name}!`);
}

export { isEven, name };
