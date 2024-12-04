import { readFile } from "../utilities/readFile.js";

// Read puzzle input
const input = await readFile("input.txt");

const matrix = input.split("\n").map((line) => line.split(""));

function traverseMatrix(matrix) {
  const dimensions = [matrix.length, matrix[0].length];

  matrix.forEach((line) => {
    line.forEach((letter) => {
      if (letter === "X") {
        console.log("It's an X!");
      }
    });
  });

  // console.log(matrix[5][5] + "\n" + dimensions);
}

traverseMatrix(matrix);
