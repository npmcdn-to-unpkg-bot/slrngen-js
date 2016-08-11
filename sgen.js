/* Copyright (c) 2016 Fernando Ortiz, MIT License */
/* jshint node:true, asi:true, eqnull:true */

(function () {
  'use strict';
  var root = this;
  var previous_sgen = root.sgen;

  // var has_require = typeof require !== 'undefined';
  // var v = root.v || has_require && require('./version');

  function SGen() {
    var self = this;

    function getEanVd(s) {
      return (10 - (s % 10)) % 10;
    }

    function sumEven(code) {
      var sum = 0;
      for (var i = 0; i < code.length; i++) {
        if (isEven(i)) {
          sum += toNumeric(code[i]);
        }
      }
      return sum;
    }

    function sumOdd(code) {
      var sum = 0;
      for (var i = 0; i < code.length; i++) {
        if (!isEven(i)) {
          sum += toNumeric(code[i]);
        }
      }
      return sum;
    }

    function isEven(i) {
      return i % 2 === 0;
    }

    function toNumeric(string) {
      return parseInt(string.replace(/\D/g, ''), 10);
    }

    /**
     * Returns a random number between min (inclusive) and max (exclusive)
     */
    /* function getRandomArbitrary(min, max) {
      return Math.random() * (max - min) + min;
    }
    */

    /**
     * Returns a random integer between min (inclusive) and max (inclusive)
     * Using Math.round() will give you a non-uniform distribution!
     */
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function escapeRegExp(str) {
      return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1');
    }

    function replaceAll(str, find, replace) {
      return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
    }

    self.noConflict = function () {
      root.sgen = previous_sgen;
      return self;
    };

    var min = 10000000;
    var max = 99999999;

    self.create = function () {
      return self.createSLRN();
    };

    self.createSLRN = function () {
      var eigth = getRandomInt(min, max);
      var ninth = self.calculateChecksumDigit(eigth.toString());
      return eigth.toString() + ninth.toString();
    };

    self.verify = function (code) {
      return self.verifySLRN(code);
    };

    self.verifySLRN = function (code) {
      var result = replaceAll(code, '-', '');
      var eigthString = result.substring(0, result.length - 1);
      var ninth = self.calculateChecksumDigit(eigthString);
      return (eigthString + ninth) === result;
    };

    self.checksum = function (code) {
      return self.calculateChecksumDigit(code);
    };

    self.calculateChecksumDigit = function (code) {
      var prefixAndCode = self.prefixCode() + code;
      var codeWithoutVd = prefixAndCode.substring(0, 12);
      var e = sumEven(codeWithoutVd);
      var o = sumOdd(codeWithoutVd);
      var me = o * 3;
      var s = me + e;
      var dv = getEanVd(s);
      return dv;
    };

    self.fmt = function (code) {
      return self.formatSLRN(code);
    };

    self.formatSLRN = function (code) {
      return code.substring(0, 3) + '-' + code.substring(3, 6) + '-' + code.substring(6);
    };

    self.fmtw = function (code) {
      return self.formatWithSLRN(code);
    };

    self.formatWithSLRN = function (code) {
      return 'SLRN ' + code.substring(0, 3) + '-' + code.substring(3, 6) + '-' + code.substring(6);
    };

    self.prefix = function () {
      return self.prefixCode();
    };

    self.prefixCode = function () {
      return '2672';
    };

    self.defmt = function (code) {
      return self.deformatSLRN(code);
    };

    self.deformatSLRN = function (code) {
      var str = code;
      if (code.indexOf('-') > 0) {
        str = code.substring(0, 3) + code.substring(4, 7) + code.substring(8);
      }
      return str;
    };
  }

  function sgen() {
    var sgenobj = new SGen();
    return sgenobj;
  }
  sgen.SGen = SGen;

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = sgen;
    }
    exports.sgen = sgen;
  } else {
    root.sgen = sgen;
  }
}).call(this);
