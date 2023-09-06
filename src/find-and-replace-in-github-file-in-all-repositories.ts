import { FindAndReplaceInGithubFileOptions, findAndReplaceInGithubFile } from '@freephoenix888/find-and-replace-in-github-file';
import { Octokit } from '@octokit/rest';
import debug from 'debug';
import delay from 'delay';

const log = debug('find-and-replace-in-github-file-in-all-repositories');

export interface FindAndReplaceInAllRepositoriesOptions extends Omit<FindAndReplaceInGithubFileOptions, 'repo'> {
  /** Octokit instance for interacting with the GitHub API */
  octokit: Octokit;
  
  /** Owner of the GitHub repositories */
  owner: string;
  /**
   * Callback function for handling errors.
   */
  onError?: (error: Error) => void;
  /**
   * Delay in milliseconds between requests to the GitHub API.
   */
  delayInMs: number;
}

/**
 * Finds and replaces text in a specific file across all repositories of a GitHub user.
 * 
 * @example
 * #### Find and replace text in a file in all repositories
```ts
const octokit = new Octokit({ auth: 'YOUR_PERSONAL_ACCESS_TOKEN' });
await findAndReplaceInAllRepositories({
  octokit,
  owner: 'username',
  path: 'path/to/file.txt',
  regex: /findMe/g,
  replacement: 'replaceWithMe',
  commitMessage: "Replaced 'findMe' with 'replaceWithMe'"
})
```
 */
export async function findAndReplaceInAllRepositories(options: FindAndReplaceInAllRepositoriesOptions): Promise<void> {
  const { octokit, owner , onError = (error) => {throw error},delayInMs = 500} = options;
  
  for await (const response of octokit.paginate.iterator(octokit.rest.repos.listForUser, {
    username: owner,
    per_page: 100
  })) {
    log({response})
    for (const repo of response.data) {
      log({repo})
      await findAndReplaceInGithubFile({ ...options, repo: repo.name }).catch(onError);
      await delay(delayInMs)
    }
  }
}
