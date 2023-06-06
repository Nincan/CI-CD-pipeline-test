/*
Populates the users who have done contributions to spaceweb in the past.

NOTE: Since spaceweb codebase is on private gitlab + VPN, we can't fetch the the contributor avatar directly.
Currently, it is to be obtained from github's avatar API: https://docs.gitlab.com/ee/api/avatar.html and manually filled in contributors.js. 
This is not the desired approach. Need to find a better way for this.

https://docs.gitlab.com/ee/api/avatar.html
https://prod-gitlab.sprinklr.com/api/v4/users?username=author_email
*/

const path = require('path');
const fs = require('fs');
const simpleGit = require('simple-git/promise');
const _ = require('lodash');

const cwd = process.cwd();
const git = simpleGit(cwd);
const excludes = ['.local'];

async function execute() {
  let logs = (await git.log()).all;
  logs = _.remove(logs, ({ author_email: email }) => {
    for (let i = 0; i < excludes.length; i++) {
      const item = excludes[i];
      if (email.indexOf(item) !== -1) {
        return false;
      }
    }
    return true;
  });
  logs = _.sortBy(_.unionBy(logs, 'author_email'), 'author_email');

  const currentContributorsData = require('../contributors');
  const updatedContributors = _.reduce(
    logs,
    (authorMap, log) => {
      // Skip the previously generated contributor data.
      if (!currentContributorsData[log.author_email]) {
        authorMap[log.author_email] = {
          name: log.author_name,
          email: log.author_email,
          avatar: '',
          gitlabUrl: `https://prod-gitlab.sprinklr.com/${log.author_email.replace('@sprinklr.com', '')}`,
          _avatar_fetch_url: `https://prod-gitlab.sprinklr.com/api/v4/avatar?email=${log.author_email}&size=32`, //to manyually fill the url
        };
      }
      return authorMap;
    },
    currentContributorsData
  );
  fs.writeFileSync(
    path.join(cwd, 'contributors.js'),
    `module.exports = ${JSON.stringify(updatedContributors, null, 2)}`
  );
}

execute();
