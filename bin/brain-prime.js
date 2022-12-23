#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { name } from '../src/cli.js';
import game from '../src/index.js';

const isPrime = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  const num = Math.ceil(Math.random() * 10);
  console.log(`Question: ${num}`);
  let correctAns = 'yes';
  for (let i = 2; i < num / 2; i += 1) {
    if (num % i === 0) { correctAns = 'no'; }
  }
  const answer = readlineSync.question('Your answer: ');
  if (correctAns === answer) {
    console.log('Correct!');
    return 1;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was ${correctAns}.\nLet's try again, ${name}!`);
  return 0;
};
game(isPrime);

export default isPrime;
