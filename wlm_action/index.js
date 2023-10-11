// welcome-action/index.js
const core = require('@actions/core');
const github = require('@actions/github');

async function run() {
  try {
    // Your code to fetch memes, check contributions, and post comments
    // ...

    const octokit = github.getOctokit(core.getInput('github-token'));

    // Your code to post a comment
    await octokit.issues.createComment({
      owner: github.context.repo.owner,
      repo: github.context.repo.repo,
      issue_number: github.context.issue.number,
      body: 'Your welcome message goes here.',
    });

  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
