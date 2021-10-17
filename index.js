const core = require('@actions/core');
const github = require('@actions/github');

try {
  // `who-to-greet` input defined in action metadata file
  const nameToGreet = core.getInput('who-to-greet');
  const githubToken = core.getInput('token')
  console.log(`Hello ${nameToGreet}!`);

  const time = (new Date()).toTimeString();
  core.setOutput("time", '??');
  core.setOutput("test", "俺の叫びを聞いてくれ");
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  // console.log(`The event payload: ${payload}`);
  core.warning('refer to http://yahoo.co.jp');

  const octokit = github.getOctokit(githubToken)
  

  octokit.rest.repos.listForOrg({
    org: "Jij-Inc",
    type: "public"
  }).then(({data}) => {
    console.log(data);
  }).catch(e => {
    console.log(e)
  })
} catch (error) {
  core.setFailed(error.message);
}

