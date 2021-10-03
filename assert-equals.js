const compareArray = (expectedArr, actual) => {
  if (!Array.isArray(actual)) {
    throw new Error(`Expected array but found ${typeof actual}`);
  }

  if (expectedArr.length !== actual.length) {
    throw new Error(
      `Expected array length ${expectedArr.length} but found ${actual.length}`
    );
  }

  if (!expectedArr.every((val, i) => val === actual[i])) {
    throw new Error(`Incorrect array returned`);
  }

  return true;
};

const compareObject = (expectedObj, actual) => {
  if (typeof actual !== "object" || Array.isArray(actual) || actual === null) {
    throw new Error(`No object returned`);
  }
};

function assertEquals(expect, actual) {
  if (Array.isArray(expect)) {
    return compareArray(expect, actual);
  }

  if (typeof expect === "object" && expect !== null) {
    return compareObject(expect, actual);
  }

  if (typeof expect !== typeof actual) {
    throw new Error(
      `Expected type ${typeof expect} but found type ${typeof actual}`
    );
  }

  if (expect !== actual) {
    throw new Error(`Expected ${expect} but found ${actual}`);
  }

  return true;
}

module.exports = assertEquals;
