# slrngen-js [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> Slave Register Number Generator

## Installation

```sh
$ npm install --save slrngen-js
```

## Usage

```js
var SLRN = require('slrngen-js');

var str = SLRN.create();
console.log(str);

console.log(SLRN.verify(str));

```
## License

MIT © [Fernando Ortiz](http://gh.nandub.info/)


[npm-image]: https://badge.fury.io/js/slrngen-js.svg
[npm-url]: https://npmjs.org/package/slrngen-js
[travis-image]: https://travis-ci.org/nandub/slrngen-js.svg?branch=master
[travis-url]: https://travis-ci.org/nandub/slrngen-js
[daviddm-image]: https://david-dm.org/nandub/slrngen-js.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/nandub/slrngen-js
