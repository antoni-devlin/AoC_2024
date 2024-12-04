import { readFile } from "../utilities/readFile.js";

// Read puzzle input
const input = await readFile("input.txt");

const matrix = input.split("\n").map((line) => line.split(""));

const search = ["XMAS", "SAMX"];

function traverseMatrix(matrix) {
  const dimensions = [matrix.length, matrix[0].length];

  matrix.forEach((line, x) => {
    line.forEach((letter, y) => {
      let coordinates = [x, y];
      console.log(coordinates[0], coordinates[1]);
      if (letter === "X") {
        console.log(`X found at ${coordinates}`);
        if (matrix[coordinates[0 + 1][1]] === "M") {
          console.log(`Found M `);
        }
      }
    });
  });

  // console.log(matrix[5][5] + "\n" + dimensions);
}

traverseMatrix(matrix);
