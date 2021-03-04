const fs = require("fs");
const buf = fs.readFileSync(process.argv[2].toString());
const res = buf.toString();
const tab = res.split("\n");
console.log(tab.length - 1);
