import run from "aocrunner";
import * as R from "ramda";
import { intersection } from "../utils/index.js";

const parseInput = (rawInput) => rawInput.split('\n').map(line => line.split(',').map((val) => val.split('-').map((num) => parseInt(num))));

const part1 = (rawInput) => {
  const input = parseInput(rawInput);

  const r = input.filter(([elfA, elfB]) => {
    // +1 for inclusiveness
    const rangeA = R.range(elfA[0], elfA[1] + 1)
    const rangeB = R.range(elfB[0], elfB[1] + 1)
    const max = Math.max(rangeA.length, rangeB.length);

    const arr = [...new Set([...rangeA, ...rangeB])];
    return arr.length === max;
  })


  return r.length;
};

const part2 = (rawInput) => {
  const input = parseInput(rawInput);

  const r = input.filter(([elfA, elfB]) => {
    // +1 for inclusiveness
    const rangeA = R.range(elfA[0], elfA[1] + 1)
    const rangeB = R.range(elfB[0], elfB[1] + 1)
    const intesectioned = intersection(rangeA, rangeB);

    return intesectioned.length > 0;
  })

  return r.length;
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
