import { readFile } from "../utilities/readFile.js";

// Read puzzle input
const input = await readFile("input.txt");

// Split input into individual reports
let reports = input.split("\n");

// Split codes into levels for parsing
reports = reports.map((code) => code.split(" "));

// Convert levels from string to int
reports = reports.map((report) => report.map((level) => Number(level)));

console.log(reports);

// function isSorted(arr) {
//   console.log(arr);
//   return arr.reduce((isSorted, value, index) => {
//     return isSorted && (index === 0 || arr[index - 1] <= value);
//   }, true);
// }

// console.log(isSorted(codes[4]));
