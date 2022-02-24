const fs = require("fs");

// read files
//  - Is asynchronous
// fs.readFile("./docs/blog1.txt", (err, data) => {
//   if (err) console.log(err);
//   console.log(data);
//   console.log(data.toString());
// });

// this is synchronous | check by running both
// console.log("last line");

// write files
// fs.writeFile("./docs/blog1.txt", "hello, world", () => {
//   console.log("file written");
// });

// if file doesn't exist
// it will create a new file with that name
// fs.writeFile("./docs/blog2.txt", "hello,again", () => {
//   console.log("file created with hello, again");
// });

// directories
// - run the code again to see error message

// fs.mkdir("./assets", (err) => {
//   err ? console.log(err) : console.log("folder created");
// });

// same code as above with conditions
// if (!fs.existsSync("./assets")) {
//   fs.mkdir("./assets", (err) => {
//     err ? console.log(err) : console.log("folder created");
//   });
// } else {
//   fs.rmdir("./assets", (err) => {
//     err ? console.log(err) : console.log("folder removed");
//   });
// }

// deleting files
// if (fs.existsSync("./docs/deleteme.txt")) {
//   fs.unlink("./docs/deleteme.txt", (err) => {
//     err ? console.log(err) : console.log("file deleted");
//   });
// }
