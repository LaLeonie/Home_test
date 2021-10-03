const compareArray = (expectedArr, actual) => {
  if (!Array.isArray(actual)) {
    throw new Error(`Expected array but found ${typeof actual}`);
  }

  if (expectedArr.length !== actual.length) {
    throw new Error(
      `Expected array length ${expectedArr.length} but found ${actual.length}`
    );
  }

  const expectedValues = [];
  const actualValues = [];

  expectedArr.forEach((val, i) => {
    if (val !== actual[i]) {
      expectedValues.push(val);
      actualValues.push(actual[i]);
    }
  });

  if (actualValues.length !== 0) {
    throw new Error(
      `Expected '${expectedValues.join()}' but found '${actualValues.join()}'`
    );
  }

  return true;
};

const compareObject = (expectedObj, actual) => {
  if (Array.isArray(actual)) {
    throw new Error(`Expected type object but found type array`);
  }

  if (actual === null) {
    throw new Error(`Expected type object but found type null`);
  }

  if (typeof actual !== object) {
    throw new Error(`Expected type object but found ${typeof actual}`);
  }

  //compare objects
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
