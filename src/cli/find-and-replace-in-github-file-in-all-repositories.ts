#!/usr/bin/env node

import { Octokit } from '@octokit/rest';
import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers';
import { findAndReplaceInAllRepositories } from '../find-and-replace-in-github-file-in-all-repositories.js';

const argv = yargs(hideBin(process.argv))
  .usage(`$0 [Options]`, "Find and replace text in github file in all repositories")
  .option('token', {
    description: 'GitHub Personal Access Token',
    type: 'string',
    demandOption: true,
  })
  .option('owner', {
    description: 'Repository owner',
    type: 'string',
    demandOption: true,
  })
  .option('repo', {
    description: 'Repository name',
    type: 'string',
    demandOption: true,
  })
  .option('path', {
    description: 'File path in the repository',
    type: 'string',
    demandOption: true,
  })
  .option('regex', {
    description: 'Regular expression pattern',
    type: 'string',
    demandOption: true,
  })
  .option('regex-flags', {
    description: 'Regular expression flags (like g, i, m)',
    type: 'string',
    default: 'g',
  })  
  .option('replacement', {
    description: 'Replacement text',
    type: 'string',
    demandOption: true,
  })
  .option('commitMessage', {
    description: 'Commit message',
    type: 'string',
    demandOption: true,
  })
  .parseSync();

const octokit = new Octokit({
  auth: argv.token,
});

findAndReplaceInAllRepositories({
  octokit,
  owner: argv.owner,
  path: argv.path,
  regex: new RegExp(argv.regex, argv.regexFlags), 
  replacement: argv.replacement,
  commitMessage: argv.commitMessage,
})
  .then(() => {
    console.log('Successfully updated the file in all repositories.');
  })
  .catch((error) => {
    console.error('An error occurred:', error);
    process.exit(1)
  });
