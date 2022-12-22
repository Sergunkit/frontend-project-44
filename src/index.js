#!/usr/bin/env node

import { name, greating } from './cli.js';

const game = (funk) => {
  greating();
  let correctAnswer = 0;
  for (let i = 0; i < 3; i += 1) {
    correctAnswer += funk();
  }
  if (correctAnswer === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default game;
