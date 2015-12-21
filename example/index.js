const formatDate = require("../lib");

var d = new Date(1989, 11, 20);

console.log(formatDate(d, "MM/DD/YYYY, h:mm"));
console.log(formatDate(d, "MMMM D, YYYY"));
console.log(formatDate(d, "dddd, MMMM, D, YYYY h:m A"));
