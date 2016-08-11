var sgen = require('node-sgen');
var SGen = sgen();
var num = SGen.fmt(SGen.create());
console.log(num);
