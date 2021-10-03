const compareArray = (expectedArr, actual) => {
  if (!Array.isArray(actual)) {
    throw new Error(`No array returned`);
  }

  if (
    expectedArr.length !== actual.length ||
    !expectedArr.every((val, i) => val === actual[i])
  ) {
    throw new Error(`Incorrect array returned`);
  }

  return true;
};

const compareObject = (expectedObj, actual) => {
  if (typeof actual !== "object" || Array.isArray(actual) || actual === null) {
    throw new Errow(`No object returned`);
  }
};

function assertEquals(expect, actual) {
  if (Array.isArray(expect)) {
    return compareArray(expect, actual);
  }

  if (typeof expect === "object" && !Array.isArray(expect) && expect !== null) {
    return compareObject(expect, actual);
  }

  return true;
}

module.exports = assertEquals;
