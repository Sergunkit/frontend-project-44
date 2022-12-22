#!/usr/bin/env node
import { greating, name } from '../src/cli.js';
import { isEven } from './brain-even.js';

greating();
let correctAnswer = 0;
for (let i = 0; i < 3; i += 1) {
  correctAnswer += isEven();
}
if (correctAnswer === 3) {
  console.log(`Congratulations, ${name}!`);
}
