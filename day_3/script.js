import { readFile } from "../utilities/readFile.js";

// Read puzzle input
const input = await readFile("input.txt");

// pattern: /mul\(919,646\)/

console.log(input.search(/mul\(919,646\)/));
