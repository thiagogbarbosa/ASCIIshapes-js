//Geometric Shapes Generator

const character = "#"; //Choose the character that will fulfill the shape
const count = 10; //The max range of the shape
const rows = [];
let inverted = false;
let result = "";

//Function to build the Circle
function padRowCircle(rowNumber, rowCount){
                                          //padding logic to keep the diameter
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 *rowNumber) + " ".repeat(rowCount -rowNumber); 
};

//Loop for the semi-circle
for ( let i = 1; i<=count ; i++){
  if (i<=(count/2)){
    rows.push(padRowCircle(i,count));
    //build the semmicircle
  } else {
    //to invert the semicircle
    rows.unshift(padRowCircle(i,count));
  }
};

for (const row of rows) {
  result = result + "\n" + row;
};

console.log(result); 


/*

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
}

//To eliminate brackets and single quotes of the final result!



for (const row of rows) {
  result = result + "\n" + row;
};

console.log(result); 

*/ 
