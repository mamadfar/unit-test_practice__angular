describe('First Test', function () {

  let testVar: any;

  beforeEach(() => {
    testVar = {}
  });

  it('should return true if a is true', function () {
    //? Arrange
    testVar.a = false;

    //? Act
    testVar.a = true;

    //? Assertion
    expect(testVar.a).toBe(true);

  });

});
