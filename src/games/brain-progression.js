#!/usr/bin/env node

// Реализация игры на последовательности
import readlineSync from 'readline-sync';
import { name } from '../cli.js';

const progression = () => {
  console.log('What number is missing in the progression?');
  let start = Math.ceil(Math.random() * 10); // Начало последовательности
  const step = Math.ceil(Math.random() * 10); // Шаг
  const long = Math.ceil(Math.random() * 5 + 5); // Длинна последовательности 5 < 10
  const leftpos = Math.abs(Math.ceil(Math.random() * 10) - long); // индекс пропуска числа
  const numbers = [];
  for (let i = 0; i < long; i += 1) { // Формирование последовательности
    numbers.push(start);
    start += step;
  }
  const correctNum = numbers[leftpos];
  numbers[leftpos] = '..'; // Присваивание '..' на место пропуска
  console.log(`Question: ${numbers.join(' ')}`);
  const answer = Number(readlineSync.question('Your answer: '));
  if (correctNum === answer) {
    console.log('Correct!');
    return 1; // Возврат '1' для подсчета правилных ответов
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was ${correctNum}.\nLet's try again, ${name}!`);
  return 0; // При неправильном ответе возвращается '0'
};

export default progression; // Экспорт для возможного расширения функционала
