// Equation (x-a)^2 + (y-b)^2 = r^2

// Radius
const r = 10;
// Center of the circle
const a = 0, b = 0;
// Whitespace
const s = 2;

// Print area
const yMax = b + r + s, yMin = b - r - s;
const xMax = a + r + s, xMin = a - r - s;

console.log("yMax=", yMax, "yMin= ", yMin);
console.log("xMax=", xMax, "xMin= ", xMin);
console.log("r=", r, "Center:", "a=", a, "b=", b);

// Output ASCII circle and axes
for (let y = yMax; y >= yMin; y--) {
    for (let x = xMin; x <= xMax; x++) {
        // Calculate the squared distance from the center
        const dx = x - a;
        const dy = y - b;
        const distanceSquared = dx * dx + dy * dy;
        const radiusSquared = r * r;
        // Check if the point is on the circle
        if (Math.abs(distanceSquared - radiusSquared) < r) {
            process.stdout.write("* ");
        } else if (x === a && y === b) {
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