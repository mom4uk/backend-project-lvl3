import { test, beforeAll } from '@jest/globals';
import loadPage from './func/utils';

beforeAll(async () => {
    await loadPage();
});

test('some check', async () => {
    // some test
    // https://ru.hexlet.io/courses
});
