#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { name } from '../src/cli.js';
import game from '../src/index.js';

const calc = () => {
  console.log('What is the result of the expression?');
  const number1 = Math.ceil(Math.random() * 100);
  const number2 = Math.ceil(Math.random() * 100);
  const signs = ['+', '-', '*'];
  const sign = signs[Math.floor(Math.random() * signs.length)];
  let expression = 0;
  switch (sign) {
    case '+':
      expression = number1 + number2;
      break;
    case '-':
      expression = number1 - number2;
      break;
    default:
      expression = number1 * number2;
  }
  console.log(`Question: ${number1} ${sign} ${number2}`);
  const answer = Number(readlineSync.question('Your answer: '));
  if (answer === expression) {
    console.log('Correct!');
    return 1;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was ${expression}.\nLet's try again, ${name}!`);
  return 0;
};

game(calc);

export default calc;
