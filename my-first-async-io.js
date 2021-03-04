const fs = require("fs");
fs.readFile(process.argv[2], (err, data) => {
    const buf = data.toString();
    const res = buf.toString();
    const tab = res.split("\n");
    console.log(tab.length - 1);
});
