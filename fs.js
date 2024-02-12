import inquirer from 'inquirer';
import QR from 'qr-image';
import fs from 'fs';

inquirer
  .prompt([
   {"message":"Type your URL:",
   name:"URL"}
  ])
  .then((answers) => {
    const URL = answers.URL;
    var qr_svg = QR.image(URL);
qr_svg.pipe(fs.createWriteStream('qr_img.png'));
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });