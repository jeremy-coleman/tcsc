/// <reference path="../typings/jasmine/jasmine.d.ts" />
/// <reference path="helpers.ts" />

describe('helpers', () => {

  describe('#average', () => {

    it("can average from one number", () => {
      var array = [1];
      var avg = helpers.average(array);
      expect(avg).toEqual(avg);
      expect(avg).toEqual(1);
    });

    it("can average from two numbers", () => {
      var array = [2, 4];
      var avg = helpers.average(array);
      expect(avg).toEqual(3);
    });

    it("can average from multiple even numbers", () => {
      var array = [2, 4, 6];
      var avg = helpers.average(array);
      expect(avg).toEqual(4);
    });

    it("can average from multiple odd numbers", () => {
      var array = [7, 3, 1];
      var avg = helpers.average(array);
      expect(avg).toEqual(array.reduce((a, b) => a + b) / array.length);
    });

    it("will throw if param is not an array", () => {
      var nonArray = 1;
      try {
        var avg = helpers.average(nonArray);
      } catch(ex) {
        expect(ex.message).toEqual("Parameter must be an array.");
      }

    });

  });

  describe('#roundedAverage', () => {

    it('can round a decimal', () => {
      var array = [7, 3, 1];
      var avg = helpers.roundedAverage(array);
      expect(avg).toEqual(4);
    });

  });

});
