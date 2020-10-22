#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

git init
git add -A
git commit -m 'deploy'

# deploying to https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/mint-made/tmb.git master:gh-pages

cd -

# Vue project deployment information can be found at: https://cli.vuejs.org/guide/deployment.html#github-pages
