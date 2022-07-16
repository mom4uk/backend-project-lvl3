#!/usr/bin/env node
import { createRequire } from 'module';
import loadPage from '../index.js';

const require = createRequire(import.meta.url);
const { program } = require('commander');

program
  .version('0.0.1')
  .description('Page loader utility')
  .arguments('<filepath> <url>')
  .option('--output [dir]', 'output path to download file', '/home/user/current-dir')
  .action((filepath, url) => {
    console.log(loadPage(filepath, url));
  });

program.parse(process.argv);
