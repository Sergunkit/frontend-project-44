#!/usr/bin/env node

// Модуль запускает игру чёт-нечет.
import isEven from '../src/games/brain-even.js';
import game from '../src/index.js';

game(isEven);
