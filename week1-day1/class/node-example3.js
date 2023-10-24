// Initialize a `rect` variable with 2 methods
const rect = {
    perimeter: (x, y) => 2 * (x + y),
    area: (x, y) => x * y
};

// Add a function to call both `area` and `perimeter` of `rect`, given input
function solveRect(l, w) {
    console.log(`\nSolving for rectangle with dimensions: ${l}, ${w}`);
    if (l <= 0 || w <= 0) {
        console.log(`Rectangle must be greater than zero. Values: ${l}, ${w}`);
    } else {
        console.log(`Area of rectangle: ${rect.area(l, w)}`);
        console.log(`Perimeter of rectangle: ${rect.perimeter(l, w)}`);
    }
    console.log();
}

// Try a couple of examples
solveRect(6, 2);
solveRect(8, 1);
solveRect(0, 9);
solveRect(4, -1);
