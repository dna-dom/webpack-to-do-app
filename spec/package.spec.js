// Mocha Specification Suite

// Imports
import { assertDeepStrictEqual } from 'assert-deep-strict-equal';
import fs from 'node:fs';

////////////////////////////////////////////////////////////////////////////////
describe('The "docs" folder', () => {

   it('contains the correct files', () => {
      const actual =   fs.readdirSync('docs').sort();
      const expected = ['bundle.js', 'index.html'];
      assertDeepStrictEqual(actual, expected);
      });

   });
