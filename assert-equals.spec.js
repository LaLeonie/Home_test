const assertEquals = require("./assert-equals");

describe("assertEquals", () => {
  describe("when array is expected", () => {
    it("throws error when no array is returned", () => {
      expect(() => assertEquals([], "")).toThrowError(
        "Expected array but found"
      );
    });

    it("throws error when wrong array is returned", () => {
      expect(() => assertEquals([1, 2], [3, 4])).toThrowError(
        "Incorrect array returned"
      );
      expect(() => assertEquals([1, 2], [1, 2, 3])).toThrowError(
        "Expected array length 2 but found 3"
      );
    });

    it("returns true when correct array is returned", () => {
      expect(() => assertEquals([1, 2], [1, 2])).toBeTruthy();
      expect(() => assertEquals([], [])).toBeTruthy();
    });
  });

  describe("when string is expected", () => {
    it("throws error when no string is returned", () => {
      expect(() => assertEquals("", [])).toThrowError(
        "Expected type string but found type object"
      );
    });

    it("throw error when incorrect string is returned", () => {
      expect(() => assertEquals("abc", "def")).toThrowError(
        "Expected abc but found def"
      );
    });

    it("returns true when correct array is returned", () => {
      expect(() => assertEquals("abc", "abc")).toBeTruthy();
    });
  });

  describe("when boolean is expected", () => {
    it("throws error when no boolean is returned", () => {
      expect(() => assertEquals(true, [])).toThrowError(
        "Expected type boolean but found type object"
      );
    });

    it("throw error when incorrect boolean is returned", () => {
      expect(() => assertEquals(true, false)).toThrowError(
        "Expected true but found false"
      );
    });

    it("returns true when correct boolean is returned", () => {
      expect(() => assertEquals(true, true)).toBeTruthy();
    });
  });

  describe("when numeric types is expected", () => {
    it("throws error when no numeric type is returned", () => {
      expect(() => assertEquals(2, "2")).toThrowError(
        "Expected type number but found type string"
      );
    });

    it("throw error when incorrect number is returned", () => {
      expect(() => assertEquals(2, 4)).toThrowError("Expected 2 but found 4");
      expect(() => assertEquals(2, -2)).toThrowError("Expected 2 but found -2");
      expect(() => assertEquals(1.1, 1.2)).toThrowError(
        "Expected 1.1 but found 1.2"
      );
    });

    it("throw error when incorrect symbolic value is returned", () => {
      expect(() => assertEquals(Infinity, -Infinity)).toThrowError(
        "Expected Infinity but found -Infinity"
      );
    });

    it("returns true when correct integer is returned", () => {
      expect(() => assertEquals(2, 2)).toBeTruthy();
      expect(() => assertEquals(-2, -2)).toBeTruthy();
    });

    it("returns true when correct float is returned", () => {
      expect(() => assertEquals(1.1, 1.1)).toBeTruthy();
    });

    it("returns true when representations of 0 are returned", () => {
      expect(() => assertEquals(+0, -0)).toBeTruthy();
    });

    it("returns true when correct symbolic value is returned", () => {
      expect(() => assertEquals(+Infinity, +Infinity)).toBeTruthy();
      expect(() => assertEquals(-Infinity, -Infinity)).toBeTruthy();
      expect(() => assertEquals(NaN, NaN)).toBeTruthy();
    });
  });

  describe("when falsy data type is expected", () => {
    it("throws error when null is expected but truthy value is returned", () => {
      expect(() => assertEquals(null, "12")).toThrowError(
        "Expected type object but found type string"
      );
    });

    it("throws error when undefined is expected but null is returned", () => {
      expect(() => assertEquals(undefined, null)).toThrowError(
        "Expected type undefined but found type object"
      );
    });

    it("throws error when null is expected but undefined is returned", () => {
      expect(() => assertEquals(null, undefined)).toThrowError(
        "Expected type object but found type undefined"
      );
    });

    it("throws error when undefined is expected but different falsy value is returned", () => {
      expect(() => assertEquals(undefined, NaN)).toThrowError(
        "Expected type undefined but found type number"
      );
    });

    it("returns true when null is expected and returned", () => {
      expect(() => assertEquals(null, null)).toBeTruthy();
    });

    it("returns true when undefined is expected and returned", () => {
      expect(() => assertEquals(undefined, undefined)).toBeTruthy();
    });
  });

  describe("when Symbol is expected", () => {});
});
