#!/usr/bin/env node

// Реализация игры по вычислению выражений
import readlineSync from 'readline-sync';
import { name } from '../cli.js';

const calc = () => {
  console.log('What is the result of the expression?');
  const number1 = Math.ceil(Math.random() * 100);
  const number2 = Math.ceil(Math.random() * 100);
  const signs = ['+', '-', '*'];
  const sign = signs[Math.floor(Math.random() * signs.length)]; // Выбор случайного знака
  let expression = 0;
  switch (sign) { // Вычисление случайного выражения
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
    return 1; // Возвращает '1' для счета корректных ответов в функции game
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was ${expression}.\nLet's try again, ${name}!`);
  return 0; // При неверном ответе возвращает '0'
};

export default calc; // Экспорт для возможного расширения функционала
