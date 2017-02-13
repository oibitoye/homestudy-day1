var myApp = require('../app/prime_calc.js');

"use strict"


describe("Array containing prime number generation tests ", function() {
  describe("Case for array of consecutive positive prime numbers", function() {

    it("should return [2, 3, 5, 7, 11, 13, 17, 19] for 20", function() {
      expect(myApp.getPrimes(20)).toEqual([2, 3, 5, 7, 11, 13, 17, 19]);
    })

    it("should return [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97] for 100", function() {
      expect(myApp.getPrimes(100)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]);
    })

    it("should return '[]' for 1", function() {
      expect(myApp.getPrimes(1)).toEqual([]);
    });

    it("should return [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67 ] for 68", function() {
      expect(myApp.getPrimes(68)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67]);
    });

    it("should return [2, 3, 5, 7] for 7", function() {
      expect(myApp.getPrimes(7)).toEqual([2, 3, 5, 7]);
    })

  });

  describe("Case for negative and invalid inputs", function() {

    it("should return [] for 0", function() {
      expect(myApp.getPrimes(0)).toEqual([]);
    });

    it("should return [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67 ] for 68", function() {
      expect(myApp.getPrimes('55')).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53]);
    });

  });

})