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

  describe("when boolean is expected", () => {});

  describe("when null is expected", () => {});

  describe("when undefined is expected", () => {});

  describe("when string is expected", () => {});

  describe("when BigInt is expected", () => {});

  describe("when Symbol is expected", () => {});

  describe("when expected and actual are different strings", () => {
    it.todo("throws an error");
  });
});
