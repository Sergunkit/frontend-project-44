// Реализует проверку количества правильных ответов
import { name } from './cli.js';

const game = (funk) => {
  let correctAnswer = 0;
  for (let i = 0; i < 3; i += 1) {
    const answer = funk();
    if (answer !== 0) {
      correctAnswer += 1;
    } else { return false; }
  }
  if (correctAnswer === 3) {
    console.log(`Congratulations, ${name}!`);
  }
  return true;
};

export default game;
