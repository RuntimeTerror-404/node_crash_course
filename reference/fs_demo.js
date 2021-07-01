const path = require("path");
const fs = require("fs");

// create folder
// fs.mkdir(path.join(__dirname, "/indexx"), {}, (err) => {
//   if (err) throw err;
//   console.log("folder created....");
// });

// create and write to file
// fs.writeFile(
//   path.join(__dirname, "./test", "hello.txt"),
//   "this file has been creates!",
//   (err) => {
//     if (err) throw err;
//     console.log("done!!!");

//     fs.appendFile(
//       path.join(__dirname, "./test", "hello.txt"),
//       " hello there from Mohit",
//       (err) => {
//         if (err) throw err;
//         console.log("done...");
//       }
//     );
//   }
// );

// read the file
// fs.readFile(path.join(__dirname, "/test", "hello.txt"), "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// rename the file
// fs.rename(
//   path.join(__dirname, "/test", "hello.txt"),
//   path.join(__dirname, "/test", "helloWorld.txt"),
//   (err) => {
//     if (err) throw err;
//     console.log("renamed...");
//   }
// );
