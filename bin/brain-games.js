#!/usr/bin/env node

// Модуль запускает приветствие, затем все импортиров-е игры поочереди
import game from '../src/index.js';
import isEven from './games/brain-even.js';
import calc from './games/brain-calc.js';
import gcd from './games/brain-gcd.js';
import progression from './games/brain-progression.js';
import isPrime from './games/brain-prime.js';

game(isEven);
game(calc);
game(gcd);
game(progression);
game(isPrime);
