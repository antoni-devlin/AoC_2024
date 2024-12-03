import { readFile } from "../utilities/readFile.js";

// Read puzzle input
const input = await readFile("input.txt");

// Split input into individual reports
let reports = input.split("\n");

// Split codes into levels for parsing
reports = reports.map((code) => code.split(" "));

// Convert levels from string to int
reports = reports.map((report) => report.map((level) => Number(level)));

// Function to check if array is either strictly increasing or decreasing
function isSorted(arr) {
  const isIncreasing = arr.every(
    (value, index) =>
      index === 0 ||
      value === arr[index - 1] + 1 ||
      value === arr[index - 1] + 2 ||
      value === arr[index - 1] + 3
  );

  const isDecreasing = arr.every(
    (value, index) =>
      index === 0 ||
      value === arr[index - 1] - 1 ||
      value === arr[index - 1] - 2 ||
      value === arr[index - 1] - 3
  );

  return isIncreasing || isDecreasing;
}

let safecount = 0;

reports.forEach((report) => {
  if (isSorted(report)) {
    safecount += 1;
  }
});

console.log(safecount);
