import { readFile } from "../utilities/readFile.js";

// Read puzzle input
const input = await readFile("input.txt");

const matrix = input.split("\n").map((line) => line.split(""));

function search(x, y) {
  let initialSquare = matrix[x][y];

  let searchGrid = [
    [x, y - 1],
    [x, y + 1],
    [x - 1, y],
    [x + 1, y],
    [x - 1, y - 1],
    [x - 1, y + 1],
    [x + 1, y - 1],
    [x + 1, y + 1],
  ];
  console.log(`Searching at ${x},${y}`);
  searchGrid.forEach((coords) => {
    console.log(matrix[coords[0]][coords[1]]);
  });
}

function traverseMatrix(matrix) {
  matrix.forEach((line, x) => {
    line.forEach((letter, y) => {
      search(x, y);
    });
  });
}

traverseMatrix(matrix);
