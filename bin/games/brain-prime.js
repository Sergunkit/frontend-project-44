// Реализация игры на определение простых чисел
import readlineSync from 'readline-sync';
import { name } from '../src/cli.js';

const isPrime = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  const num = Math.ceil(Math.random() * 10);
  console.log(`Question: ${num}`);
  let correctAns = 'yes';
  for (let i = 2; i <= num / 2; i += 1) { // Перебор до половины загаданного числа.
    if (num % i === 0) { correctAns = 'no'; } // Определяется делится ли оно на что-нибудь нацело.
  }
  const answer = readlineSync.question('Your answer: ');
  if (correctAns === answer) {
    console.log('Correct!');
    return 1; // Возврат '1' для подсчета правилных ответов в функции game
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was ${correctAns}.\nLet's try again, ${name}!`);
  return 0; // При неправильном ответе возвращается '0'
};

export default isPrime; // Экспорт для brain-games
