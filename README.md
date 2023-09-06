[![npm](https://img.shields.io/npm/v/@freephoenix888/find-and-replace-in-github-file-in-all-repositories.svg)](https://www.npmjs.com/package/@freephoenix888/find-and-replace-in-github-file-in-all-repositories)

Find and replace text in github file in all repositories

# Library
**[Documentation](https://freephoenix888.github.io/find-and-replace-in-github-file-in-all-repositories/)**
# Quick Start
- [Find and replace text in a file in all repositories](https://freephoenix888.github.io/find-and-replace-in-github-file-in-all-repositories/functions/findAndReplaceInGithubFile.html#md:find-and-replace-text-in-a-file-in-all-repositories)

# Demo
- Clone this repository
```
git clone https://github.com/FreePhoenix888/find-and-replace-in-github-file-in-all-repositories.git
```
- Install dependencies
```
npm install
```
- Set environment variables by creating `.env.demo.local` by copying `env.demo` which contains "template" of environment variables
- Change values in demo/demo.ts
- Run demo
```
npx ts-node demo/demo.ts
```


# CLI
## Usage
<!-- CLI_HELP_START -->

### `find-and-replace-in-github-file-in-all-repositories`
```
find-and-replace-in-github-file-in-all-repositories [Options]

Find and replace text in github file in all repositories

Options:
  --help           Show help                                           [boolean]
  --version        Show version number                                 [boolean]
  --token          GitHub Personal Access Token              [string] [required]
  --owner          Repository owner                          [string] [required]
  --repo           Repository name                           [string] [required]
  --path           File path in the repository               [string] [required]
  --regex          Regular expression pattern                [string] [required]
  --regex-flags    Regular expression flags (like g, i, m)
                                                         [string] [default: "g"]
  --replacement    Replacement text                          [string] [required]
  --commitMessage  Commit message                            [string] [required]
```

<!-- CLI_HELP_END -->

## Usage ways
<!-- CLI_USAGE_WAYS_START -->
If you are going to use this package in a project - it is recommended to install it is [Locally](#local-installation)  
If you are going to use this package for yourself - it is recommended to install it [Globally](#global-installation) or run it directly using [npx](#directly-running-using-npx)
### Directly running using npx
```shell
npx --yes @freephoenix888/find-and-replace-in-github-file-in-all-repositories
```

### Global Installation
#### Global installation and running using binary name
```shell
npm install --global @freephoenix888/find-and-replace-in-github-file-in-all-repositories
/home/runner/work/find-and-replace-in-github-file-in-all-repositories/find-and-replace-in-github-file-in-all-repositories/dist/cli/find-and-replace-in-github-file-in-all-repositories
```

#### Global installation and running using npx
```shell
npm install --global @freephoenix888/find-and-replace-in-github-file-in-all-repositories
npx /home/runner/work/find-and-replace-in-github-file-in-all-repositories/find-and-replace-in-github-file-in-all-repositories/dist/cli/find-and-replace-in-github-file-in-all-repositories
```

### Local installation

#### Local installation and running using npx
```shell
npm install @freephoenix888/find-and-replace-in-github-file-in-all-repositories
npx /home/runner/work/find-and-replace-in-github-file-in-all-repositories/find-and-replace-in-github-file-in-all-repositories/dist/cli/find-and-replace-in-github-file-in-all-repositories
```

#### Local installation and running using npm script
```shell
npm install @freephoenix888/find-and-replace-in-github-file-in-all-repositories
```
Add npm script to package.json. Note that you can name  your script as you want but it must call binary file provided by the package
```json
{
  "scripts": {
    "/home/runner/work/find-and-replace-in-github-file-in-all-repositories/find-and-replace-in-github-file-in-all-repositories/dist/cli/find-and-replace-in-github-file-in-all-repositories": "/home/runner/work/find-and-replace-in-github-file-in-all-repositories/find-and-replace-in-github-file-in-all-repositories/dist/cli/find-and-replace-in-github-file-in-all-repositories"
  }
}
```
and run
```shell
npm run /home/runner/work/find-and-replace-in-github-file-in-all-repositories/find-and-replace-in-github-file-in-all-repositories/dist/cli/find-and-replace-in-github-file-in-all-repositories
```
<!-- CLI_USAGE_WAYS_END -->