const expectedNumbers = [ 12, 11,  7, 17, 39, 40 ];
const actualNumbers   = [ 11, 12, 17,  7, 40, 39 ];

/**
 * @param {array} a
 * @param {array} b
 */

const comparator = (x, y) => {
  if (x < y) {
    return -1;
  }

  if (x > y) {
    return 1;
  }

  return 0;
};

/**
 *
 * @param {array} a
 * @param {array} b
 */
const compareArrays = function(a, b) {
  if (a.length !== b.length) {
    return;
  }

  a.sort(comparator);
  b.sort(comparator);

  const result = a.map((item, index) => item === b[index])
    .filter((item) => item === false);

  return result.length === 0;
};

const result = compareArrays(expectedNumbers, actualNumbers);
console.log(result);