#!/usr/bin/env node

// Модуль запускает приветствие, затем все импортиров-е игры поочереди
import game from '../src/index.js';
import isEven from './brain-even.js';
import calc from './brain-calc.js';
import gcd from './brain-gcd.js';
import progression from './brain-progression.js';
import isPrime from './brain-prime.js';

game(isEven);
game(calc);
game(gcd);
game(progression);
game(isPrime);
