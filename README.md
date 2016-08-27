# slrngen-js [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
[![semantic-release][semantic-release-image]][semantic-release-url] [![Commitizen friendly][commitizen-image]][commitizen-url]
> Slave Register Number Generator

## Setup

https://nodejs.org/en/

Or on Mac with homebrew

```sh
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

brew update
brew install node
```

## Node Installation

```sh
$ npm install --save node-sgen
```

## Bower Installation
```sh
$ bower install --save sgen
```

## Node Library Usage

```js
var SGen = require('node-sgen');

var str = SGen().create();
console.log(str);

console.log(SGen().verify(str));
```

## Browser Library Usage

Coming Soon

## CLI Usage

Create a new number and check if it exist on www.slaveregister.com
```sh
$ sgen new --browser
```
Validates a current number against www.slaveregister.com
```sh
$ sgen 123-456-781 --browser
```
Validates a current number against fetlife.com
```sh
$ sgen 123-456-781 --fetlife --browser
```
# Note, the library nor the cli tool do not store numbers to a database.

## License

MIT © [Fernando Ortiz](http://gh.nandub.info/)


[npm-image]: https://badge.fury.io/js/node-sgen.svg
[npm-url]: https://npmjs.org/package/node-sgen
[travis-image]: https://travis-ci.org/nandub/slrngen-js.svg?branch=master
[travis-url]: https://travis-ci.org/nandub/slrngen-js
[daviddm-image]: https://david-dm.org/nandub/slrngen-js.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/nandub/slrngen-js
[semantic-release-image]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square
[semantic-release-url]: https://github.com/semantic-release/semantic-release
[commitizen-image]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
[commitizen-url]: http://commitizen.github.io/cz-cli
