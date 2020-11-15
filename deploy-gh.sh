#!/usr/bin/env sh

# deploy to GH Pages

# create a vue.config.js file with a public path of /tmb/
echo "module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/${varName}/'
      : '/'
  }" >> vue.config.js

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

# remove the vue.config.js file
rm vue.config.js

# Vue project deployment information can be found at: https://cli.vuejs.org/guide/deployment.html#github-pages
