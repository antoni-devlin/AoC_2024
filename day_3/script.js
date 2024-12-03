import { readFile } from "../utilities/readFile.js";

// Read puzzle input
const input = await readFile("input.txt");

const pattern = /mul\(\d{1,3},\d{1,3}\)/g;

let matches = input
  .match(pattern)
  .map((match) => match.slice(4, -1))
  .map((match) => match.split(","))
  .map((match) => match.map((number) => Number(number)));

console.log(matches);
