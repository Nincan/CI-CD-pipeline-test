cd packages/spaceweb-crm-components;

yarn build

current_version=$(node -p "require('./package').version")

printf "Next version (current is $current_version)? "
read next_version

if ! [[ $next_version =~ ^[0-9]+\.[0-9]+\.[0-9](-.+)? ]]; then
  echo "Version must be a valid semver string, e.g. 1.0.2 or 2.3.0-beta.1"
  exit 1
fi

if [[ $current_version = $next_version ]]; then
  echo "Republishing same version is prohibited"
  echo "Update to a newer version"
  exit 1
fi

npm version "$next_version"
git add .
git commit -m "Upgrades spaceweb-crm-components to ${next_version}"
git push

# Push the tag that was created by `npm version`
git push origin v${next_version}

echo "Released version ${next_version} for @sprinklr/spaceweb-crm-components"



