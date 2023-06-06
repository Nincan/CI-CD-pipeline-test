#! /bin/bash
set -e

current_version=$(node -p "require('./package').version")
BASEDIR=$(pwd)

printf "Next version (current is $current_version)? "
read next_version

if ! [[ $next_version =~ ^[0-9]+\.[0-9]+\.[0-9](-.+)? ]]; then
  echo "Version must be a valid semver string, e.g. 1.0.2 or 2.3.0-beta.1"
  exit 1
fi

if [[ $current_version = $next_version ]]; then
  echo "Republishing same version. Deleting the older version"
  echo "Successfully deleted older version"
fi

npm version "$next_version" --allow-same-version
echo VersionUpdate: @spaceweb:$next_version

# build & publish spaceweb
echo ======Building SpaceWeb======
cd $BASEDIR
cd packages/spaceweb

npm version "$next_version" --allow-same-version
# Update spaceweb-themes dependency to same version in spaceweb package.json
node -e "let pkg=require('./package.json'); pkg.peerDependencies['@sprinklr/spaceweb-themes']='${next_version}'; require('fs').writeFileSync('package.json', JSON.stringify(pkg, null, 2));"
cp package.json dist/
cd dist

echo "Publishing @sprinklr/spaceweb ${next_version}"
npm publish --registry https://prod-nexus.sprinklr.com/nexus/repository/npm-internal/
echo "@sprinklr/spaceweb ${next_version} is successfully published."


# publish spaceweb/themes
echo ======Building SpaceWeb Themes======
cd $BASEDIR
cd packages/spaceweb-themes

npm version "$next_version" --allow-same-version
cp package.json dist/
cd dist

echo "Publishing @sprinklr/spaceweb-themes ${next_version}"
npm publish --registry https://prod-nexus.sprinklr.com/nexus/repository/npm-internal/
echo "@sprinklr/spaceweb-themes ${next_version} is successfully published."

cd $BASEDIR
git add .
git commit -m "upgrades spaceweb to ${next_version}"

echo "Published ${next_version} for @sprinklr/spaceweb & @sprinklr/spaceweb-themes."
echo "A new version of Docs can now be published using the docs:publish-aws command"


