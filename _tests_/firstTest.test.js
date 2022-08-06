import fs from 'fs';
import path from 'path';
import os from 'os';
import nock from 'nock';
import loadPage from '../index.js';

const mockResult = '';
let tempPath;
beforeEach(async () => {
  await fs.mkdtemp(path.join(os.tmpdir(), 'page-loader-'), async (err, folder) => {
    tempPath = folder;
    // console.log(folder);
  });
});
const url = 'https://ru.hexlet.io/courses';

// const scope = nock(url)
//   .get('/courses')
//   .reply(200, mockResult);

test('some check', async () => {
  // console.log(tempPath);
  console.log(`${process.cwd()}/__fixtures__/ru-hexlet-io-courses.html`);
  await loadPage(tempPath, url);
  const downloadData = await fs.readFile(`${tempPath}/ru-hexlet-io-courses.html`, 'utf-8', () => {});
  const fixtureData = await fs.readFile(`${process.cwd()}/__fixtures__/ru-hexlet-io-courses.html`, 'utf-8', (err, data) => {
    console.log(data);
    return data;
  });
  expect(downloadData).toEqual(fixtureData);
});
