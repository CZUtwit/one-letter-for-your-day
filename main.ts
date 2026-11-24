// One Letter for Your Day entry (Node 22, standard library only).
// The whole entry is a single letter, written to /output/entry.txt.
// The letter is W, standing for the word "wild": a day that ran wild.
// One character, no word, no gloss, no punctuation, as the rules require.
//
// Why W: the judge imagines the word behind the letter, and "wild" is
// vivid, funny and true at once. The rules' own examples (A for amazing,
// F for Friday-feeling, Z for zero sleep) are the letters every entrant
// reaches for first, so W is the sharper pick: the same vividness, far
// fewer copies of it in the field. Byte-identical entries share one rate
// and the earlier receipt places above its copies, so a less-crowded
// letter is worth more than the obvious one. "Wild" also covers the day
// honestly: a day of four make.fun submissions, two blind rounds and one
// deleted Tinder repo did run wild.
//
// Deterministic: no input, no randomness, no network. Two runs write
// the same single byte.
//
// Run it outside the grader's container with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { existsSync, statSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const letter = 'W';
const letterChars = [...letter].length; // exactly 1 character required

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const dest = join(outDir, 'entry.txt');
writeFileSync(dest, letter, 'utf8');
if (!existsSync(dest) || statSync(dest).size !== letterChars) {
  throw new Error('entry.txt was not written as exactly one character');
}
