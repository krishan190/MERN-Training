// const fs=require("fs");
// fs.writeFileSync("hello.html","hi i am here");
// console.log("file created successfully");
// console.log(__dirname);
// console.log(__filename);

const fs = require("fs");
const path = require("path")
const dirpath = path.join(__dirname, "crud")
console.log(dirpath);
const filepath = dirpath + "/krishan.txt";
console.log(filepath);
fs.appendFileSync(filepath, "Hello World");


