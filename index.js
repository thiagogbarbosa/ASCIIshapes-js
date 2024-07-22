//JavaScript Basics building a Pyramid
const character = "#";
const count = 10;
const rows = [];
let inverted = false;

//Padding the rows with the exact number of chatacters and empty space
function padRow(rowNumber, rowCount) {
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
};

for (let i = 1; i <= count; i++) {
  if (inverted) {
    rows.unshift(padRow(i, count));
  } else {
    rows.push(padRow(i, count));
  }
};

//Different ways to build the loop for the Pyramid

/*while (rows.length < count) {
  rows.push(padRow(rows.length + 1, count));
}*/

/*for (let i = count; i > 0; i--) {
  rows.push(padRow(i, count));
}*/

//To eliminate brackets and single quotes of the final result!

let result = "";

for (const row of rows) {
  result = result + "\n" + row;
};

console.log(result); 