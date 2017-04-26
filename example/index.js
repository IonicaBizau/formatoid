const formatoid = require("../lib");

var d = new Date(1989, 11, 21);

console.log(formatoid(d, "MM/DD/YYYY, h:mm"));
// => 12/20/1989, 12:00

console.log(formatoid(d, "MMMM D, YYYY"));
// => December 20, 1989

console.log(formatoid(d, "dddd, MMMM, D, YYYY h:m A"));
// => Wednesday, December, 20, 1989 12:0 AM

console.log(formatoid(d, "YYYYMMDDT0HHMMSSZ"));
// => 19891221T0001200+02:00
