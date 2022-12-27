#!/usr/bin/env node

// Реализация игры на определение четности чисел
import readlineSync from 'readline-sync';
import { name } from '../../src/cli.js';
import game from '../../src/index.js';

const isEven = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const number = Math.ceil(Math.random() * 10);
  const even = number % 2 === 0;
  console.log(`'Question: ${number}'`);
  const answer = (readlineSync.question('Your answer: '));
  if ((even && answer === 'yes') || (!even && answer === 'no')) {
    console.log('Correct!');
    return 1; // Возвращает '1' для счета корректных ответов в функции game
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${even ? 'yes' : 'no'}'.`);
  console.log(`Let's try again, ${name}!`);
  return 0; // При неверном ответе возвращает '0'
};
game(isEven);

export default isEven; // Экспорт для возможного расширения функционала
