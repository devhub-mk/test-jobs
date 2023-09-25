const fs = require("fs");
const path = require("path");
const timestamp = new Date().toISOString();
const text ="Hello worldyyyyyy";
// fs.writeFileSync(path.join(__dirname, "log.txt"), `${text}\n`)
fs.appendFileSync(path.join(__dirname, "log.txt"), `${timestamp}\n`);
console.log("done");