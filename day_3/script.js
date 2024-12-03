import { readFile } from "../utilities/readFile.js";

// Read puzzle input
const input = await readFile("input.txt");

// const pattern = /mul\(\d{1,3},\d{1,3}\)/g;

const firstPattern = /^(.*?)don\'t\(\)/g;

const pattern =
  /do\(\).*?(mul\(\d{1,3},\d{1,3}\)).*?(mul\(\d{1,3},\d{1,3}\))*.*don\'t\(\)/g;

// do() and don't()
// ^do\(\).*(mul\(\d{1,3},\d{1,3}\)+.*don\'t\(\)$

let sumOfProducts = 0;

let initialMatches = input.match(firstPattern);

initialMatches = initialMatches[0].match(pattern);

console.log(initialMatches);

// let matches = input
//   .match(pattern)
//   .map((match) => match.match(/mul\(\d{1,3},\d{1,3}\)/g));

// matches = matches
//   .flat()
//   .map((match) => match.slice(4, -1).split(","))
//   .map((match) => match.map((number) => Number(number)));

// matches.forEach((element) => {
//   sumOfProducts += element[0] * element[1];
// });

// console.log(sumOfProducts);
