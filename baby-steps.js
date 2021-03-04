var myArgs = process.argv.slice(2);
var i = 0;
myArgs.map((e) => (i += Number(e)));
console.log(i);
