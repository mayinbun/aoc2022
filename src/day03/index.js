import run from 'aocrunner';
import * as R from 'ramda';
import { intersection } from './util.js';

const parseInput = (rawInput) => rawInput;
const charCodeOfa = 'a'.charCodeAt(0);
const charCodeOfA = 'A'.charCodeAt(0);

const part1 = (rawInput) => {
  const input = parseInput(rawInput).split('\n');

  const r = input.reduce((acc, item) => {
    const [left, right] = R.splitEvery(item.length / 2, item);
    const [intersectioned] = R.intersection(left, right);

    const val = intersectioned === intersectioned.toUpperCase()
        ? intersectioned.charCodeAt(0) - charCodeOfA + 27
        : intersectioned.charCodeAt(0) - charCodeOfa + 1;

    acc+=val;

    return acc;
  }, 0)

  return r;
};

const part2 = (rawInput) => {
  const input = parseInput(rawInput).split('\n');

  const chunks = R.splitEvery(3, input);

  const r = chunks.reduce((acc, chunk) => {
    const [intersectioned] = intersection(...chunk);

    const val = intersectioned === intersectioned.toUpperCase()
        ? intersectioned.charCodeAt(0) - charCodeOfA + 27
        : intersectioned.charCodeAt(0) - charCodeOfa + 1;

    acc += val;
    return acc;
  }, 0)

  return r;
};

run({
  part1: {
    tests: [
      // {
      //   input: ``,
      //   expected: "",
      // },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      // {
      //   input: ``,
      //   expected: "",
      // },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
