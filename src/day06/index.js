import run from "aocrunner";

const parseInput = (rawInput) => rawInput;

const hasUniqueCharacters = (array) => {
  return new Set(array).size === array.length;
}

const part1 = (rawInput) => {
  const input = parseInput(rawInput).split('');
  const inspector = [];
  let res = 0;

  for (let i = 0; i < input.length; i++) {
    const character = input[i];
    inspector.push(character);

    if (inspector.length > 4) {
      inspector.shift();
    }

    if(inspector.length === 4 && hasUniqueCharacters(inspector)) {
      res = i + 1;
      break;
    }
  }


  return res;
};

const part2 = (rawInput) => {
  const input = parseInput(rawInput).split('');

  const inspector = [];
  let res = 0;

  for (let i = 0; i < input.length; i++) {
    const character = input[i];
    inspector.push(character);

    if (inspector.length > 14) {
      inspector.shift();
    }

    if(inspector.length === 14 && hasUniqueCharacters(inspector)) {
      res = i + 1;
      break;
    }
  }

  return res;
};

run({
  part1: {
    tests: [
      // {
      //   input: ``,
      //   expected: "",
      // },
    ],
    solution: part1
  },
  part2: {
    tests: [
      // {
      //   input: ``,
      //   expected: "",
      // },
    ],
    solution: part2
  },
  trimTestInputs: true,
  onlyTests: false
});
