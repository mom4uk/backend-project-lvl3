import fs from 'fs';
import path from 'path';
import os from 'os';
import nock from 'nock';
import loadPage from '../index.js';

const mockResult = await fs.readFile(`${process.cwd()}/__fixtures__/ru-hexlet-io-courses.html`, 'utf-8', () => {});
let x;
beforeEach(async () => {
  await fs.mkdtemp(path.join(os.tmpdir(), 'page-loader-'), () => {});
});
const url = 'https://ru.hexlet.io/courses';

// const scope = nock(url)
//   .get('/courses')
//   .reply(200, mockResult);

test('some check', async () => {
  console.log(x);
  await loadPage(url);
  const downloadData = await fs.readFile(`${tempPath}/ru-hexlet-io-courses.html`, 'utf-8', () => {});
  const fixtureData = await fs.readFile(`${process.cwd()}/__fixtures__/ru-hexlet-io-courses.html`, 'utf-8', () => {});
  expect(downloadData).toEqual(fixtureData);
});
