import run from 'aocrunner';
import { compose, map, sum } from 'ramda';


const parseInput = (rawInput) => rawInput.split('\n');

const reduceToStrategy = strategy => input => input.reduce((acc, item) => acc += strategy[item] || 0, 0);

const part1 = (rawInput) => {
    const strategyMap = {
        'A X': 4,
        'A Y': 8,
        'A Z': 3,
        'B X': 1,
        'B Y': 5,
        'B Z': 9,
        'C X': 7,
        'C Y': 2,
        'C Z': 6,
    };

    const input = parseInput(rawInput);

    return reduceToStrategy(strategyMap)(input);
};

const part2 = (rawInput) => {
    const strategyMap2 = {
        'A X': 3,
        'A Y': 4,
        'A Z': 8,
        'B X': 1,
        'B Y': 5,
        'B Z': 9,
        'C X': 2,
        'C Y': 6,
        'C Z': 7,
    };

    const input = parseInput(rawInput);

    return reduceToStrategy(strategyMap2)(input);
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
