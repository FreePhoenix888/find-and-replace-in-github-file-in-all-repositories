import { Octokit } from "@octokit/rest";
import {findAndReplaceInAllRepositories} from '../src/main.js'
import dotenv from 'dotenv'
dotenv.config({
  path: '.env.demo.local'
})

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
await findAndReplaceInAllRepositories({
  octokit,
  owner: 'deep-foundation',
  path: 'package.json',
  regex: /myRegex/,
  replacement: `myReplacement`,
  commitMessage: `Replace myRegex with myReplacement`
})