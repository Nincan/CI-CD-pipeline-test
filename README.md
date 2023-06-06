<h1 align="center">Spaceweb React Components</h1>


**Space** is a design system comprised of modern, responsive, living components. **Spaceweb** is the React implementation of Space.

Spaceweb is available on npm as private sprinklr package. This single package contains all Spaceweb components.

```bash
# using yarn
yarn add @sprinklr/spaceweb @sprinklr/spaceweb-themes

# using npm
npm install @sprinklr/spaceweb @sprinklr/spaceweb-themes
```

## Docs

To read the documentation, please visit [frontend.sprinklr.com/spaceweb](https://frontend.sprinklr.com/spaceweb).

## For developers

- [Component guidelines](https://prod-gitlab.sprinklr.com/sprinklr/frontend/spaceweb/-/wikis/Component-Design)
- Running Spaceweb project `yarn docs:dev `
- [How to publish Spaceweb Docs and Spaceweb Frontend Web](https://sprinklr.getoutline.com/doc/publishing-spaceweb-docs-iNR1IoW9aI)


## For Maintainers

On updation of `spaceweb` or `spaceweb-themes`
- release new version according to semver
- update the dependency in `packages/spaceweb-icons` since it has a peerDependency on `spaceweb/icons` component.
    - release new version of `spaceweb-icons` if required.
- update peer-dependency of `spaceweb-themes` inside `spaceweb/package.json`    
- release new docs

On updation of `spaceweb-icons`
- release new version according to semver
- release new docs for Icon Library to get updated

## Analysis Report

To run Analysis Report (`yarn report-ci-schedule`), you must build the `spaceweb-test-cli` package first.