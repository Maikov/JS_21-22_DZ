var app = require('../js/app.js');


describe("app", function() {
  it("call power", function() {
    
    // prepare
    var result;

// console.log('app', app)

    // act
    result = app.myPower(4, 2);

    // assert
    expect(result).toBe(16);
  });
});

describe("app", function() {
  it("call power", function() {
    
    // prepare
    var result;

// console.log('res', app)

    // act
    result = app.myPower(5, 2);

    // assert
    expect(result).toEqual(25);
  });
});


describe("app", function() {
  it("call power", function() {
    
    // prepare
    var result;

// console.log('res', app)

    // act
    result = app.myPower(3, 3);

    // assert
    expect(result).toEqual(25); //here is a mistake for check
  });
});