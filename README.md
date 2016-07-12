# slrngen-js [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> Slave Register Number Generator

## Setup

https://nodejs.org/en/

Or on Mac with homebrew

```sh
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

brew update
brew install node
```

## Installation

```sh
$ npm install --save slrngen-js
```

## Library Usage

```js
var SLRN = require('slrngen-js');

var str = SLRN.create();
console.log(str);

console.log(SLRN.verify(str));
```

## CLI Usage

Create a new number and check if it exist on www.slaveregister.com
```sh
$ slrngen new --browser
```
Validates a current number against www.slaveregister.com
```sh
$ slrngen 123-456-781 --browser
```
Validates a current number against fetlife.com
```sh
$ slrngen 123-456-781 --fetlife --browser
```
# Note, the library nor the cli tool do not store numbers to a database.

## License

MIT © [Fernando Ortiz](http://gh.nandub.info/)


[npm-image]: https://badge.fury.io/js/slrngen-js.svg
[npm-url]: https://npmjs.org/package/slrngen-js
[travis-image]: https://travis-ci.org/nandub/slrngen-js.svg?branch=master
[travis-url]: https://travis-ci.org/nandub/slrngen-js
[daviddm-image]: https://david-dm.org/nandub/slrngen-js.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/nandub/slrngen-js
