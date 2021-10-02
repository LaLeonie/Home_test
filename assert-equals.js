const compareArray = (expectedArr, actual) => {
  if (!Array.isArray(expected)) {
    throw new Error(`No array returned`);
  }
};

const compareObject = (expectedObj, actual) => {
  if (typeof actual !== "object" || Array.isArray(actual) || actual === null) {
    throw new Errow(`No object returned`);
  }
};

function assertEquals(expect, actual) {
  if (typeof expect !== typeof actual) {
    throw new Error(`${expect} and ${actual} are not the same data type`);
  }

  if (Array.isArray(expect)) {
    return compareArray(expect, actual);
  }

  if (typeof expect === "object" && !Array.isArray(expect) && expect !== null) {
    return compareObject(expect, actual);
  }

  return true;
}

module.exports = assertEquals;
