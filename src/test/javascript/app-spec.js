
describe("A spy, when configured to fake a return value", function() {
  var foo, bar, fetchedBar;

  beforeEach(function () {
    foo = {
      setBar: function (value) {
        bar = value;
      },
      getBar: function () {
        return bar;
      }
    };

    spyOn(foo, "getBar").and.returnValue(745);

    foo.setBar(123);
    fetchedBar = foo.getBar();
  });

  it("tracks that the spy was called", function () {
    expect(foo.getBar).toHaveBeenCalled();
  });

  it("should not affect other functions", function () {
    expect(bar).toEqual(123);
  });

  it("when called returns the requested value", function () {
    expect(fetchedBar).toEqual(745);
  });
});
    
describe("A spy, when configured to call through", function() {
  var foo, bar, fetchedBar;

  beforeEach(function() {
    foo = {
      setBar: function(value) {
        bar = value;
      },
      getBar: function() {
        return bar;
      }
    };

    spyOn(foo, 'getBar').and.callThrough();

    foo.setBar(123);
    fetchedBar = foo.getBar();
  });

  it("tracks that the spy was called", function() {
    expect(foo.getBar).toHaveBeenCalled();
    expect(foo.getBar).toHaveBeenCalledTimes(1);
  });

  it("should not affect other functions", function() {
    expect(bar).toEqual(123);
  });

  it("when called returns the requested value", function() {
    expect(fetchedBar).toEqual(123);
  });
});


describe("A spy", function() {
  var foo, bar = null;

  beforeEach(function() {
    foo = {
      setBar: function(value) {
        bar = value;
      }
    };

    spyOn(foo, 'setBar');

    foo.setBar(123);
    foo.setBar(456, 'another param');
  });

  it("tracks that the spy was called", function() {
    expect(foo.setBar).toHaveBeenCalled();
    expect(foo.setBar).toHaveBeenCalledTimes(2);
  });

  it("tracks all the arguments of its calls", function() {
    expect(foo.setBar).toHaveBeenCalledWith(123);
    expect(foo.setBar).toHaveBeenCalledWith(456, 'another param');
  });

  it("stops all execution on a function", function() {
    expect(bar).toBeNull();
  });
});

describe("A suite", function() {

  it("contains spec with an expectation", function() {
    expect(true).toBe(true);
  });

  it("should return sum", function() {
    var sum = sumIt(1, 2);
    expect(sum).toBe(3);
  });

  it("should test true", function () {
    var a = true;
    
    expect(a).toBe(true);
    expect(a).toBeTruthy();
  });
  
  it("should test false", function () {
    var a = false;
    
    expect(a).toBe(false);
    expect(a).toBeFalsy();
    expect(a).not.toBeTruthy();
  });
  
});

xdescribe("disabled suite", function () {
});

describe("suite with pending specs", function () {

  xit("pending spec 1", function () {
    expect(true).toBe(true);
  });

  xit("pending spec 2", function () {
    expect(true).toBe(true);
  });

  it("can be declared with 'it' but without a function");

  it("can be declared by calling 'pending' in the spec body", function() {
    expect(true).toBe(false);
    pending();
  });
  
});


