/**
 * Root for your util libraries.
 *
 * You can import them in the src/template/index.js,
 * or in the specific file.
 *
 * Note that this repo uses ES Modules, so you have to explicitly specify
 * .js extension (yes, .js not .ts - even for TypeScript files)
 * for imports that are not imported from node_modules.
 *
 * For example:
 *
 *   correct:
 *
 *     import _ fro 'lodash
 *     import myLib from '../utils/myLib.js'
 *     import { myUtil } from '../utils/index.js'
 *
 *   incorrect:
 *
 *     import _ fro 'lodash
 *     import myLib from '../utils/myLib'
 *     import { myUtil } from '../utils'
 */

// disappointed in ramda not supporting more than 2 arrays
export const intersection = (...arrs) => {
  const counts = {};
  for (let arr of arrs) {
    const unique = [...new Set(arr)];

    for (let val of unique) {
      if (!counts[val]) {
        counts[val] = 0;
      }
      counts[val]++;
    }
  }

  const intersected = Object.entries(counts)
    .filter(([char, count]) => count === arrs.length)
    .map(([char]) => char);

  return intersected;
};