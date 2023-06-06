# How to Remove Support for IE (Future)

We added partial support for the most basic Grid's features temporarily for legacy versions of IE and Edge. Here we document all the places that need to be removed when that time comes.

## Required Changes

1. Erase the following files:

```sh
# erase MS variant for columns
git rm packages/spaceweb/src/col/variants/__tests__/MSCol.spec.tsx
git rm packages/spaceweb/src/col/variants/MSCol.tsx
git rm packages/spaceweb/src/col/Col.tsx

# erase MS variant for grid
git rm packages/spaceweb/src/grid/variants/__tests__/MSGrid.spec.tsx
git rm packages/spaceweb/src/grid/variants/MSGrid.tsx
git rm packages/spaceweb/src/grid/Grid.tsx
```

2. Make the standard variant of `Grid.tsx` and `Col.tsx` to be the default and only variants available:

```sh
# make the standard variants the default
git mv packages/spaceweb/src/col/{variants/,}Col.tsx
git mv packages/spaceweb/src/col/{variants/,}/__tests__/Col.spec.tsx
git mv packages/spaceweb/src/grid/{variants/,}Grid.tsx
git mv packages/spaceweb/src/grid/{variants/,}/__tests__/Grid.spec.tsx

# remove remaining directories
rm -rf packages/spaceweb/src/col/variants
rm -rf packages/spaceweb/src/grid/variants
```

3. Remove plugin from theme's configuration:

```sh
# apply the following patch
diff --git a/packages/spaceweb-themes/src/common/plugins.js b/packages/spaceweb-themes/src/common/plugins.js
index c4c510ab..5855b754 100644
--- a/packages/spaceweb-themes/src/common/plugins.js
+++ b/packages/spaceweb-themes/src/common/plugins.js
@@ -3,7 +3,6 @@
  */

 const typography = require('@sprinklr/spaceweb-cli/lib/commands/theme/plugins/typography');
-const msGrid = require('@sprinklr/spaceweb-cli/lib/commands/theme/plugins/msGrid');
 const makeTailwindPlugin = require('../plugins/makeTailwindPlugin');

 module.exports = {
@@ -24,6 +23,5 @@ module.exports = {
     makeTailwindPlugin({ pluginKey: 'themedOutline', cssProperty: 'outline' }),
     makeTailwindPlugin({ pluginKey: 'themedTextColor', cssProperty: 'color' }),
     typography.default,
-    msGrid.default,
   ],
 };
```

4. Erase MSGrid plugin from CLI:

```sh
git rm packages/spaceweb-cli/src/commands/theme/plugins/msGrid.ts
```

5. Rebuild and Install Spaceweb's CLI:

```sh
# from packages/spaceweb-cli
yarn build
npm i -g
```

6. Generate the themes to remove MS utility classes:

```
spaceweb theme ./packages/spaceweb-themes/src/light.js ./packages/spaceweb-themes/lib/hyperspace/light
spaceweb theme ./packages/spaceweb-themes/src/dark.js ./packages/spaceweb-themes/lib/dark
spaceweb theme ./packages/spaceweb-themes/src/spr-app-light.js ./packages/spaceweb-themes/lib/space/light
spaceweb theme ./packages/spaceweb-themes/src/spr-app-dark.js ./packages/spaceweb-themes/lib/space/dark
```

7. Commit the above changes:

```
git add -p .
git commit
```

Well done!
