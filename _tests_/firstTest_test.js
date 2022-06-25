import { test, beforeAll, expect } from '@jest/globals';
import { fs, path, os } from 'fs';
import loadPage from './func/utils';

beforeAll(async () => {
    await fs.mkdtemp(path.join(os.tmpdir(), 'page-loader-'));
});

test('some check', async () => {
    await loadPage('https://ru.hexlet.io/courses');
    const downloadData = await fs.readFile('/page-loader-/ru-hexlet-io-courses.html');
    const fixtureData = await fs.readFile('/fixtures/ru-hexlet-io-courses.html');
    expect(downloadData).toEqual(fixtureData);
});
