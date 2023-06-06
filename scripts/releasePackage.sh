#! /bin/bash
set -e

printf "Please enter the package number to publish\n\n"
COLUMNS=0
select package_name in spaceweb spaceweb-bolt spaceweb-charts spaceweb-editor spaceweb-form spaceweb-icons spaceweb-meet spaceweb-table spaceweb-test-cli spaceweb-calendar spaceweb-crm-components
do
    case $package_name in
        *) break;;
    esac
done
printf "\n$package_name\n\n";
if [ ! -d "./packages/$package_name" ] || [ -z "$package_name" ]; then
  echo "Package does not exist."
  exit 1
fi

if [ "$package_name" = "spaceweb" ]; then
  yarn workspace @sprinklr/spaceweb build &&
  yarn workspace @sprinklr/spaceweb test &&
  ./scripts/releaseSpaceweb.sh
  exit 0
fi

if [ "$package_name" = "spaceweb-crm-components" ]; then
  ./scripts/releaseSpacewebCRMComponents.sh
  exit 0
fi

cd packages/$package_name;

yarn build

current_version=$(node -p "require('./package').version")
ICONS_DIR=$(pwd)

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
cp package.json dist/
git add .
git commit -m "upgrades $package_name to ${next_version}"

echo "Publishing @sprinklr/$package_name ${next_version}"

cd dist
npm publish --registry https://prod-nexus.sprinklr.com/nexus/repository/npm-internal/
echo "@sprinklr/$package_name ${next_version} is successfully published."


