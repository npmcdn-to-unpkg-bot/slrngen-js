test: npm-dep
	@npm test || { exit 1; }

build: npm-dep
	@npm run build || { exit 1; }

install: npm-dep
	@npm install || { exit 1; }

clean:
	@rm -fr dist *.log

npm-dep:
	@test `which npm` || { echo 'You need npm to do npm install... makes sense?'; exit 1; }

.PHONY: all

all: build test clean 
