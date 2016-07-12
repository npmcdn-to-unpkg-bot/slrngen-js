test: npm-dep
	@npm test

release: npm-dep bump
	@git push origin master
	@git push origin v$(shell node version.js)
	@make publish

publish: npm-dep
	@npm publish

install: npm-dep
	@npm install

clean:
	@rm -fr dist/

bump:
	@npm version $(kind)

npm-dep:
	@test `which npm` || echo 'You need npm to do npm install... makes sense?'

.PHONY: all

