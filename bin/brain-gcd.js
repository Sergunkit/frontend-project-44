#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { name } from '../src/cli.js';
import game from '../src/index.js';

const gcd = () => {
  let res = 0;
  console.log('Find the greatest common divisor of given numbers.');
  let number1 = Math.ceil(Math.random() * 100);
  let number2 = Math.ceil(Math.random() * 100);
  console.log(`Question: ${number1} ${number2}`);
  while (number1 && number2) {
    number1 > number2 ? number1 %= number2 : number2 %= number1;
    res = number1 + number2;
  }
  const answer = Number(readlineSync.question('Your answer: '));
  if (answer === res) {
    console.log('Correct!');
    return 1;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was ${res}.\nLet's try again, ${name}!`);
  return 0;
};

game(gcd);

export default gcd;
