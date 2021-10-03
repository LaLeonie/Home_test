const assertEquals = require("./assert-equals");

describe("assertEquals", () => {
  describe("when an array is expected", () => {
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

  describe("when expected and actual are the same string", () => {
    it("returns without throwing an error", () => {
      expect(() => assertEquals("abc", "abc")).not.toThrow();
    });
  });

  describe("when expected and actual are different strings", () => {
    it.todo("throws an error");
  });
});
