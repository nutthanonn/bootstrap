var rl = require("readline").createInterface(process.stdin);
var inputList = [];

rl.on("line", (line) => {
  inputList.push(line);
}).on("close", () => {});
