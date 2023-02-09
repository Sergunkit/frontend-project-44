#!/usr/bin/env node

// Реализация игры по вычислению НОД
import readlineSync from 'readline-sync';
import { name } from '../cli.js';

const gcd = () => {
  let res = 0;
  console.log('Find the greatest common divisor of given numbers.');
  let number1 = Math.ceil(Math.random() * 100);
  let number2 = Math.ceil(Math.random() * 100);
  console.log(`Question: ${number1} ${number2}`);
  while (number1 && number2) {
    // eslint-disable-next-line no-unused-expressions, max-len
    number1 > number2 ? number1 %= number2 : number2 %= number1; // вычмслене НОД по алгоритму Евклида
    res = number1 + number2;
  }
  const answer = Number(readlineSync.question('Your answer: '));
  if (answer === res) {
    console.log('Correct!');
    return 1; // Возвращает '1' для счета корректных ответов в функции game
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was ${res}.\nLet's try again, ${name}!`);
  return 0; // При неверном ответе возвращает '0'
};

export default gcd; // Экспорт для возможного расширения функционала
