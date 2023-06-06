# @sprinklr/spaceweb-icons

This package provides the Spinklr Icons packaged as a set of React components.

## Icon categories

All the available icons are categorised to the following 5 top level categories:

- **brand**: all media & channel icons (eg Twitter, Facebook, Snapchat)
- **placeholder**: all placeholders/illustration icons
- **product**: icons specific to Sprinklr and its products (Product and Module icons)
- **line**: all remaining line variant icons
- **solid**: all remaining solid variant icons

## Adding new Icons

- Svg file name should always be in camelCase. Generated tsx file will be of same name with first letter capitalized(PascalCase).
- Append `_clr` in svg file name only if color/fill attributes of svg needs to be preserved.
- Add `data-tags="tag1,tag2"` in the svg file to aid searching the icons with word and the added tags.
- Run `yarn svgo /full/path/to/icon.svg`

## Installation & Usage

Install the package in your project directory with:

```sh
yarn add @sprinklr/spaceweb-icons
```

Visit the [Spaceweb Icon Library](https://frontend.sprinklr.com/spaceweb/iconLibrary) to find the specific icon and the steps to use them.

## How are the Icons built?
This package has the following directory structure:
```sh
.
|-- dist (directory which gets published to npm)
|   |-- brand
|   |-- line
|   |-- placeholder
|   |-- product
|   `-- solid
|-- svgComponents (src react ts Icon components)
|   |-- brand
|   |-- line
|   |-- placeholder
|   |-- product
|   `-- solid
|-- svgs (optimised svg files)
|   |-- brand
|   |-- placeholder
|   |-- product
|   |-- line
|   `-- solid
```

Running `yarn build` takes each icon from the `svg` directory and creates a corresponding React component in the `svgComponents` folder.
It also builds a metadata file for powering the search in Icons Library.

## Adding new Icon

- Add the svg icon in the correct category. Please ensure it is optimised. Use `yarn svgo filePath.svg`. It internally uses [SVGO](https://jakearchibald.github.io/svgomg/) to shed some extra bytes.
- run `yarn build` to build the corresponding React Icons
- publish a new version using `yarn release`
- deploy the docs site to display the new additions in the Icons Library.

## Deprecating icons

- To deprecate any icon, add an entry of old icon's and new icon's path in `scripts/deprecatedIconList.js` file.
- Run `yarn build`. This script will execute `scripts/deprecate-icons.js` script. This script will add `data-deprecate` attribute to all the deprecated icons. Commit those changes and push it to repository.
- Icons with `data-deprecate` attribute are not being included in metadata, hence those icons are excluded from the docs to stop it's further usages.
- In addition to that, a JSDoc depreacted comment is added to the icons, which will show a warning to developers who are using it.
- `scripts/replace-deprecated-icons` can be use to bulk replace deprecated icons from any repository. Use it together with `jscodeshift`.
  - Run `npx -t jscodeshift node_modules/@sprinklr/spaceweb-icons/scripts/replace-deprecated-icons.js <path_to_files>`
  - Add `jscodeshift` package if it's not already installed.
