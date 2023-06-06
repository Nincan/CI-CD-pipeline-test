# Contributing to Spaceweb

## Getting started

1. Fork & clone the repo, then run `yarn` to install dependencies from npm.

```bash
git clone git@prod-gitlab.sprinklr.com:sprinklr/frontend/spaceweb.git
cd spaceweb
yarn
```

Spaceweb is using a monorepo setup, and picked [Lerna](https://lerna.js.org) to manage it. If you are not familiar with it, you can learn more about the [basic Lerna commands here](https://lerna.js.org/#commands).

2. To install all the dependencies of all the Spaceweb packages, run the following command:

```bash
yarn bootstrap
```

## Fixing Bugs
- For making any bug fix, please ensure that there is an [Issue](https://prod-gitlab.sprinklr.com/sprinklr/frontend/spaceweb/-/issues) opened with all relevant details. These details are captured in changelogs for better documentation.
- Please ensure that you are adding relevant test cases for the proposed change
- Verify the fix by ensuring the docs site is built correctly and the visual changes are as expected


## New Components
The components in Spaceweb follows a standard [Component Anatomy](https://prod-gitlab.sprinklr.com/sprinklr/frontend/spaceweb/-/wikis/Component-Design).


Once your changes are ready, send a PR against the main repository.