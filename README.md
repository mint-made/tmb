# tmb

### Project Overview
The site collects user data from a series of questions, with a dual slider input for the user to describe the current values vs where they would like to be in the future e.g. They have low level tech skills but want to have advanced tech skills in the future. On submission of the users answers, the data is stored in Firestore for later use. The site locks the content behind a login page to prevent unwanted visitors accessing the sites content. 

### Screenshot
![screenshot](https://user-images.githubusercontent.com/53815961/102715471-988c6a00-42cd-11eb-917a-e9f42566527d.png)

### Technologies Utilized
- firebase-auth 
- firebase-firestore 
- firebase-trigger-email 
- vuex 
- vuejs2 
- vue-router 

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

### Builds and deploys the project to Github Pages with a public path of /tmb

```
./deploy-gh.sh
```

### Builds and deploys the project to Digital Ocean

```
./deploy-do.sh
```

### Github Pages

This project can be found at: https://mint-made.github.io/tmb

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
