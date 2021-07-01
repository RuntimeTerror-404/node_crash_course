const path = require("path");

// file name
console.log(path.basename(__filename));

// directory name
console.log(path.dirname(__dirname));

// create path object
console.log(path.parse(__filename));

// concatenate path
console.log(path.join(__dirname, "test", "hello.html"));
