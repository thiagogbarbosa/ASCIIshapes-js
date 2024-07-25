/*

         ASCII geometric shapes Generator 

*/

//fenPyramid generates a ASCII Pyramid based on the given range and character,
//also it is possible to generate the pyramid upside down! Just pass true as the last argument
function genPyramid(range,character,inverted){

  const rows = [];
  let result = "";
 
  //Add Type Validation
  
  //Padding the rows with the exact number of chatacters and empty space
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
  
  //Different ways to build the loop for the Pyramid
  /*while (rows.length < count) {
    rows.push(padRow(rows.length + 1, count));
  }*/
  
  /*for (let i = count; i > 0; i--) {
    rows.push(padRow(i, count));
  } */

  //To eliminate brackets and single quotes of the final result!
  for (const row of rows) {
    result = result + "\n" + row;
  };
  
  return console.log(result);
};

//Calling the function
genPyramid(10,"#",true);

















