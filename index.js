/*

         ASCII geometric shapes Generator 

*/

function genPyramid(range,character,inverted){

  const rows = [];
  let result = "";
 
  //Add Type Validation

  function padRow(rowNumber, rowCount) {
    return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
  };
  
  for (let i = 1; i <= range; i++) {
    if (inverted) {
      rows.unshift(padRow(i, range));
    } else {
      rows.push(padRow(i, range));
    }
  };
  
  for (const row of rows) {
    result = result + "\n" + row;
  };
  
  return console.log(result);
};

genPyramid(10,"#",true);












//Padding the rows with the exact number of chatacters and empty space


//Different ways to build the loop for the Pyramid
/*while (rows.length < count) {
  rows.push(padRow(rows.length + 1, count));
}*/

/*for (let i = count; i > 0; i--) {
  rows.push(padRow(i, count));
} */

//To eliminate brackets and single quotes of the final result!


