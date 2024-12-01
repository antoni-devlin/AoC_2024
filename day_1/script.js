import fs from "node:fs/promises";

async function readFile(filePath) {
  try {
    const data = await fs.readFile(filePath, "utf8");
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

const input = await readFile("input.txt");

const lines = input.trim().split("\n");

const list1 = lines
  .map((line) => line.trim().split(/\s+/)[0])
  .map((string) => Number(string));
const list2 = lines
  .map((line) => line.trim().split(/\s+/)[1])
  .map((string) => Number(string));

let list1_sorted = list1.sort(function (a, b) {
  return a - b;
});
let list2_sorted = list2.sort(function (a, b) {
  return a - b;
});

// Pseudo code
// Count from 0 to 999. For each number, get the array[1] of each list, and find the difference between them. Add this to a variable called result.

let result = 0;

for (let i = 0; i < list1_sorted.length; i++) {
  console.log(
    `${list1_sorted[i]} + ${list2_sorted[i]} = ${Math.abs(
      list1_sorted[i] - list2_sorted[i]
    )}`
  );
  result += Math.abs(list1_sorted[i] - list2_sorted[i]);
}

console.log(result);
