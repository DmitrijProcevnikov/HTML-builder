const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const fs = require("fs");
const rl = readline.createInterface({ input, output });
const path = require('path');

rl.question('Привет. напиши свой текст?\n', (answer) => {
  fs.writeFile(path.join(__dirname, 'text.txt'), answer + "\n", (err) => {
    if(err) throw err;
});
});
rl.on('line', (input) => {
  if(input === "exit"){
    console.log("Запись завершена!");
    rl.close();
  }else{
    let res = input + "\n";
  fs.appendFile(path.join(__dirname, 'text.txt'), res, (err) => {
    if(err) throw err;
    });
  }});
rl.on('SIGINT', () => {
  console.log("Запись завершена!");
  rl.close();
});