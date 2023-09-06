import { generateDocumentation } from "@deep-foundation/npm-automation";
import fsExtra from 'fs-extra'
import { glob } from "glob";
import path from 'path'

main();

async function main() {
  const files = glob.sync(path.resolve(process.cwd(), 'dist', 'cli', "*.js"));
  const writeMode = '755'
  for (const file of files) {
    fsExtra.chmodSync(file, writeMode)
  }

  await generateDocumentation({
    generateCliAppsHelpInReadmeOptions: undefined,
    generateUsageWaysOfNpmCliAppsInMarkdownFormatOptions: undefined,
    generateTableOfContentsForMarkdownOptions: null,
  });
}
