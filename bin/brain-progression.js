#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { name } from '../src/cli.js';
import game from '../src/index.js';

const progression = () => {
  console.log('What number is missing in the progression?');
  let start = Math.ceil(Math.random() * 10);
  const step = Math.ceil(Math.random() * 10);
  const long = Math.ceil(Math.random() * 10) + 5;
  const leftpos = Math.abs(Math.ceil(Math.random() * 10) - long);
  const numbers = [];
  for (let i = 0; i < long; i += 1) {
    numbers.push(start);
    start += step;
  }
  const correctNum = numbers[leftpos];
  numbers[leftpos] = '..';
  console.log(`Question: ${numbers}`);
  const answer = Number(readlineSync.question('Your answer: '));
  if (correctNum === answer) {
    console.log('Correct!');
    return 1;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was ${correctNum}.\nLet's try again, ${name}!`);
  return 0;
};
game(progression);

export default progression;