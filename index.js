import axios from 'axios';
import fs from 'fs/promises';
import formFilename from './src/utils.js';

export default async (filepath, url) => {
  const filename = formFilename(url);
  axios.get('https://ru.hexlet.io/courses')
    .then((response) => response.data)
    .then((data) => {
      const fullPath = filepath.concat('/', filename);
      fs.writeFile(fullPath, data);
    })
    .then(() => {
      console.log(`open ${filepath}/${filename}`);
    });
};
