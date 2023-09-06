import { Octokit } from "@octokit/rest";
import {findAndReplaceInAllRepositories} from '../src/main.js'
import dotenv from 'dotenv'
dotenv.config()

const octokit = new Octokit({ auth: 'YOUR_PERSONAL_ACCESS_TOKEN' });
await findAndReplaceInAllRepositories({
  octokit,
  owner: 'deep-foundation',
  path: '.github/workflows/npm-publish.yml',
  regex: /uses: deep-foundation\/workflows\/.github\/workflows\/npm-publish.yml@npm-publish-.+/g,
  replacement: 'uses: deep-foundation/workflows/.github/workflows/npm-publish.yml@npm-publish-4.0.1',
  commitMessage: "Use npm-publish-4.0.1 version"
})