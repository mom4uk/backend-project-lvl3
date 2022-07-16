i:
	npm intall

test:
	npm test

lint:
	npx eslint .

publish-link: publish link

publish:
	npm publish --dry-run

link:
	npm link

.PHONY: test