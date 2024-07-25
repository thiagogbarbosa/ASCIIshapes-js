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

function genCircle(radius,centerA,centerB){
  const s = 2;

  const yMax = centerB + radius + s, yMin = centerB - radius - s;
  const xMax = centerA + radius + s, xMin = centerA - radius - s;

  for (let y = yMax; y >= yMin; y--) {
    for (let x = xMin; x <= xMax; x++) {
        // Calculate the squared distance from the center
        const dx = x - centerA;
        const dy = y - centerB;
        const distanceSquared = dx * dx + dy * dy;
        const radiusSquared = radius * radius;
        // Check if the point is on the circle
        if (Math.abs(distanceSquared - radiusSquared) < radius) {
            process.stdout.write("* ");
        } else if (x === centerA && y === centerB) {
            process.stdout.write("o " ); // Center of the circle
        } else if (x === 0 && y === 0) {
            process.stdout.write("+-");
        } else if (x === 0) {
            process.stdout.write(y === yMax ? "^y" : "| ");
        } else if (y === 0) {
            process.stdout.write(x === xMax ? ">x" : "--");
        } else {
            process.stdout.write("  ");
        }
    }
    console.log();
}
};

genCircle(10,5,2);
















