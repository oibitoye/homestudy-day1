var myApp = require('../app/prime_calc.js');

"use strict"


describe("Data types tests ", function() {
  describe("Case for some falsy values", function() {

    it("should return true for 41", function() {
      expect(myApp.getPrimes(41)).toEqual('no value');
    });

    it("should return 'no value' for undefined", function() {
      expect(myApp.dataTypes(undefined)).toEqual('no value');
    });

  });

  describe("Case for booleans", function() {

    it("should return true for `true`", function() {
      expect(myApp.dataTypes(true)).toBe(true);
    });

    it("should return false for `false`", function() {
      expect(myApp.dataTypes(false)).toBe(false);
    });

  });

  describe("Case for Numbers", function() {

    it("should return 'less than 100' for 44", function() {
      expect(myApp.dataTypes(44)).toBe('less than 100');
    });

    it("should return 'more than 100' for 144", function() {
      expect(myApp.dataTypes(144)).toBe('more than 100');
    });

    it("should return 'equal to 100' for 100", function() {
      expect(myApp.dataTypes(100)).toBe('equal to 100');
    });


  });
();