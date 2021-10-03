const assertEquals = require("./assert-equals");

describe("assertEquals", () => {
  describe("when array is expected", () => {
    it("throws error when no array is returned", () => {
      expect(() => assertEquals([], "")).toThrowError("No array returned");
    });

    it("throws error when wrong array is returned", () => {
      expect(() => assertEquals([1, 2], [3, 4])).toThrowError(
        "Incorrect array returned"
      );
      expect(() => assertEquals([1, 2], [1, 2, 3])).toThrowError(
        "Incorrect array returned"
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
        "Wrong data type returned"
      );
    });

    it("throw error when incorrect string is returned", () => {
      expect(() => assertEquals("abc", "def")).toThrowError(
        "Wrong value returned"
      );
    });

    it("returns true when correct array is returned", () => {
      expect(() => assertEquals("abc", "abc")).toBeTruthy();
    });
  });

  describe("when boolean is expected", () => {
    it("throws error when no boolean is returned", () => {
      expect(() => assertEquals(true, [])).toThrowError(
        "Wrong data type returned"
      );
    });

    it("throw error when incorrect boolean is returned", () => {
      expect(() => assertEquals(true, false)).toThrowError(
        "Wrong value returned"
      );
    });

    it("returns true when correct boolean is returned", () => {
      expect(() => assertEquals(true, true)).toBeTruthy();
    });
  });

  describe("when falsy value is expected", () => {
    it("throws error when null is expected but truthy value is returned", () => {
      expect(() => assertEquals(null, "12")).toThrowError(
        "Wrong data type returned"
      );
    });

    it("throws error when undefined is expected but null is returned", () => {
      expect(() => assertEquals(undefined, null)).toThrowError(
        "Wrong data type returned"
      );
    });

    it("throws error when null is expected but undefined is returned", () => {
      expect(() => assertEquals(null, undefined)).toThrowError(
        "Wrong data type returned"
      );
    });

    it("throws error when null is expected but different falsy value is returned", () => {
      expect(() => assertEquals(null, NaN)).toThrowError(
        "Wrong data type returned"
      );
    });

    it("returns true when null is expected and returned", () => {
      expect(() => assertEquals(null, null)).toBeTruthy();
    });

    it("returns true when undefined is expected and returned", () => {
      expect(() => assertEquals(undefined, undefined)).toBeTruthy();
    });
  });

  describe("when undefined is expected", () => {});

  describe("when BigInt is expected", () => {});

  describe("when Symbol is expected", () => {});
});
