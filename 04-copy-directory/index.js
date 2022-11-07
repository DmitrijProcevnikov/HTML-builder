const { mkdir } = require('node:fs/promises');
const { join } = require('node:path');
const fs = require("fs");
const path = require('path');


async function makeDirectory() {
  const projectFolder = join(__dirname, 'files-copy');
  const dirCreation = await mkdir(projectFolder, { recursive: true });

//   console.log(dirCreation);
  return dirCreation;
};

fs.readdir(path.join(__dirname, "files"), (err, files) => {
    if (err)
      console.log(err);
    else {
      console.log("\nКопирование завершено!");
      files.forEach(file => {
          fs.createReadStream(path.join(__dirname, "files", file)).pipe(fs.createWriteStream(path.join(__dirname, "files-copy", file)));
      })
    }
  });

makeDirectory().catch(console.error);
