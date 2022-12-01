import run from "aocrunner";
import { compose } from 'ramda';
import * as R from 'ramda';

const parseInput = R.compose(
    R.map(R.pipe(R.split('\n'), R.map(Number))),
    R.split('\n\n')
)

const part1 = (rawInput) => {
  const input = parseInput(rawInput);

  const getGroupMax = compose(
      R.reduce(R.max, 0),
      R.map(R.sum)
  )

  const result = getGroupMax(input);

  return result;
};

const part2 = (rawInput) => {
  const input = parseInput(rawInput);

  const fn = compose(
      R.sum,
      R.slice(0, 3),
      R.sort(R.descend(R.identity)),
      R.map(R.sum)
  )

  const result = fn(input);

  return result;
};
