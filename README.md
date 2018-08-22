# node-react-cypher-example
**This is an example project using nodejs and react.**
**I just wanted to figure out, if it's possible to have a nodejs server and a react frontend application in one project and how to deal with it. here is the result...**

> decrypt secret messages

[![Build Status](https://travis-ci.org/dominickolbe/node-cli-example.svg?branch=master)](https://travis-ci.org/dominickolbe/node-cli-example)

## Requirements
I used the following installed versions to build this project:

- node v9.8.0
- npm 5.6.0
- yarn 1.9.4
- macOS Hight Sierra 10.13.6
- Google Chrome 68.0.3440.106 (Official Build) (64-bit)

I prefer to use [node version manager](https://github.com/creationix/nvm) to manage different versions of nodejs on your computer
```
$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
$ nvm install 9.8
$ nvm use 9.8
```

Make sure all dependencies have been installed before moving on:

```
yarn
// or
npm install
```

## Folder structure

```
src/
  client/   (react application)
  server/   (express.js server)
  
static/     (static files)
```

## Production
start server in production environment
```
yarn start
```

## Testing
execute tests
```
yarn test
```

## other tasks
```
// build react app
yarn webpack

// build entire application
yarn build
```

## TODO

next steps could be:

- add more validation to server and client
- API throttling
- create redux store (eg to handle localstorage)
- styling


---

10 1 22 27 19 3 18 9 16 20 28 6 15 18 29 20 8 5 230 23 9 14
