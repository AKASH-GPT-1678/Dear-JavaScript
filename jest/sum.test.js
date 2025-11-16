const {increments} = require("./fucntions/inc.js")

describe('random', () => {

  beforeEach(() => {
    console.log("before each");
  });

  test('should ', () => {
    expect(increments(200, 20)).toBe(220);
  });

});
