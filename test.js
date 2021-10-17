const { Octokit } = require("@octokit/rest");

console.log(Octokit)
const octokit = new Octokit();

// Compare: https://docs.github.com/en/rest/reference/repos/#list-organization-repositories
octokit.rest.repos
  .listForOrg({
    org: "Jij-Inc",
    type: "public",
  })
  .then(({ data }) => {
    console.log(data)
  });