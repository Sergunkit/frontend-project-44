install:
	npm ci
brain-games:
	node bin/brain-games.js
brain-even:
	bin/games/brain-even.js
brain-calc:
	bin/games/brain-calc.js
brain-gcd:
	bin/games/brain-gcd.js
brain-progression:
	bin/games/brain-progression.js
brain-prime:
	bin/games/brain-prime.js
publish:
	npm publish --dry-run
.PHONY:
	test
lint:
	npx eslint .
