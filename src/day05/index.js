import run from "aocrunner";

const parseInput = (rawInput) => rawInput.split("\n\n");

const getMovesMeta = (movesRaw) => {
  return movesRaw.split("\n").map((line) => {
    let [, count, from, to] = /move (\d+) from (\d+) to (\d+)/.exec(line);

    return {
      count: parseInt(count, 10),
      from: parseInt(from, 10) - 1, // array 0 indexed
      to: parseInt(to, 10) - 1 // array 0 indexed
    };
  });
};

const getCrateGroupsAndMoves = (rawCrates, rawMoves) => {
  const groups = [];
  const crateSize = "[X]".length;
  const rawLines = rawCrates.split("\n");
  rawLines.pop(); // remove indexes line

  for (let raw_stack_line of rawLines) {
    for (let i = 0; i < raw_stack_line.length; i += crateSize + 1) {
      const start = i;
      const end = start + crateSize;
      const crate = raw_stack_line.substring(start, end);

      const groupIndex = i / (crateSize + 1);
      if (!groups[groupIndex]) {
        groups[groupIndex] = [];
      }
      if (crate.trim()) {
        groups[groupIndex].push(crate.substring(1, 2));
      }
    }
  }

  for (let group of groups) {
    // reverse so we can pop items
    group.reverse();
  }

  const moves = getMovesMeta(rawMoves);
  return {
    moves,
    groups
  };
};


const part1 = (rawInput) => {
  const [cratesRaw, movesRaw] = parseInput(rawInput);

  const { groups, moves } = getCrateGroupsAndMoves(cratesRaw, movesRaw);

  for (const { count, from, to } of moves) {
    for (let i = 0; i < count; i++) {
      let crate = groups[from].pop();
      groups[to].push(crate);
    }
  }

  const topOnes = groups.map((group) => group[group.length - 1])

  return topOnes.join('')
};

const part2 = (rawInput) => {
  const [cratesRaw, movesRaw] = parseInput(rawInput);

  const { groups, moves } = getCrateGroupsAndMoves(cratesRaw, movesRaw);

  for (let { count, from, to } of moves) {
    let gr = groups[from].splice(-1 * count, count);
    groups[to].push(...gr);
  }

  const topOnes = groups.map((group) => group[group.length - 1]);

  return topOnes.join('');
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
