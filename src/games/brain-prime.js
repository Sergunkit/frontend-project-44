// Реализация игры на определение простых чисел
import readlineSync from 'readline-sync';
import { name } from '../cli.js';

const isPrime = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  const num = Math.ceil(Math.random() * 10);
  console.log(`Question: ${num}`);
  let correctAns = 'yes';
  for (let i = 2; i <= num / 2; i += 1) { // Перебор до половины заданного числа.
    if (num % i === 0) { correctAns = 'no'; } // Определяется делится ли оно на что-нибудь нацело.
  }
  if (num === 1) { correctAns = 'no'; }
  const answer = readlineSync.question('Your answer: ');
  if (correctAns === answer) {
    console.log('Correct!');
    return 1; // Возврат '1' для подсчета правилных ответов в функции game
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAns}'.`);
  console.log(`Let's try again, ${name}!`);
  return 0; // При неправильном ответе возвращается '0'
};

export default isPrime; // Для возможного расширения функционала
