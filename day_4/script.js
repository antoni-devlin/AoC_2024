import { readFile } from "../utilities/readFile.js";

// Read puzzle input
const input = await readFile("input.txt");

const matrix = input.split("\n").map((line) => line.split(""));

const searchString = "XMAS";

function search(starting_x, starting_y) {
  let currentSquare = matrix[starting_x][starting_y];
  for (let i = 0; i < searchString.length; i++) {
    let target = searchString[i];
    if (currentSquare === target) {
      console.log(`Found a ${target} at ${starting_x},${starting_y}`);
    }
  }
}

function traverseMatrix(matrix) {
  const dimensions = [matrix.length, matrix[0].length];

  matrix.forEach((line, x) => {
    line.forEach((letter, y) => {
      if (letter === "X") {
        if (matrix[x][y - 1] === "M") {
        }
      }
    });
  });

  // console.log(matrix[5][5] + "\n" + dimensions);
}

traverseMatrix(matrix);
