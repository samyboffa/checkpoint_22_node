const fs = require("fs");

fs.readdir(process.argv[2], (err, list) => {
    let tab = list.filter((e) => e.includes(`.${process.argv[3]}`));
    console.log(tab.join("\n"));
});
