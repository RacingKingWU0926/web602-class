const { PI } = Math;  // private to this file

area = (r) => PI * r ** 2;  // exported
circumference = (r) => 2 * PI * r;  // exported

// Add the line below to explicitly export these two functions, 
// to indicate that they are available for other modules to import when
// they `require` this module.
module.exports = {area, circumference};
