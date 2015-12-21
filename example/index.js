const formatDate = require("../lib");

var d = new Date(1989, 11, 21);

console.log(formatDate(d, "MM/DD/YYYY, h:mm"));
// => 12/20/1989, 12:00

console.log(formatDate(d, "MMMM D, YYYY"));
// => December 20, 1989

console.log(formatDate(d, "dddd, MMMM, D, YYYY h:m A"));
// => Wednesday, December, 20, 1989 12:0 AM
