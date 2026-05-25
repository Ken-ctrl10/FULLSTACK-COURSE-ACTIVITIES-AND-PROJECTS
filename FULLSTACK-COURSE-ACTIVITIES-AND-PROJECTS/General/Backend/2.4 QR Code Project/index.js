/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
  .prompt([
    {
      message: 'Enter the URL you want to generate into a QR code:',
      name: 'url'
    }
  ])
  .then((answer) => {
    let url = answer.url;
    var qr_svg = qr.image(url, { type: 'png' });
    qr_svg.pipe(fs.createWriteStream(`qr-${new Date().getMinutes()}.png`));

    fs.writeFile('url.txt', url, (err) => {
      if(err) throw err;
      console.log('The URL file has been saved!');
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
