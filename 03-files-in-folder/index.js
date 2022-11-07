const fs = require('fs');
const path = require('path');


fs.readdir(path.join(__dirname, "secret-folder"), (err, files) => {
  if (err)
    console.log(err);
  else {
    console.log("\nCurrent directory filenames:");
    files.forEach(file => {
      fs.stat(path.join(__dirname, `secret-folder/${file}`), (err, stats) => {
        if (err) throw err;

        if (stats.isDirectory() === false) {
          console.log(`${file}`.split(".").join(" - ") + " - " + stats.size + "b");
        }
      });
    })
  }
});