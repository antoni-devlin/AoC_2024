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

const input = await readFile("../input.txt");

const lines = input.trim().split("\n");

const list1 = lines
  .map((line) => line.trim().split(/\s+/)[0])
  .map((string) => Number(string));
const list2 = lines
  .map((line) => line.trim().split(/\s+/)[1])
  .map((string) => Number(string));

const frequency = (arr, item) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      count++;
    }
  }
  return count;
};

let result = 0;

for (let i = 0; i < list1.length; i++) {
  let freq = 0;
  let similarity_score = 0;
  for (const list2_number of list2) {
    if (list1[i] === list2_number) {
      freq += 1;
    }
    similarity_score = list1[i] * freq;
  }
  console.log(`${list1[i]} appears in list 2 ${freq} times.`);
  result += similarity_score;
}

console.log(result);
