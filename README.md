# ensure-git

[![NPM version](https://img.shields.io/npm/v/ensure-git.svg?style=flat)](https://npmjs.com/package/ensure-git) [![NPM downloads](https://img.shields.io/npm/dm/ensure-git.svg?style=flat)](https://npmjs.com/package/ensure-git) [![Build Status](https://img.shields.io/circleci/project/egoist/ensure-git/master.svg?style=flat)](https://circleci.com/gh/egoist/ensure-git) [![donate](https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&style=flat)](https://github.com/egoist/donate)

## Why?

You always need to ensure that git working tree is clean and no conficts in your repo before publishing your package.

## Install

```bash
yarn add ensure-git
```

## Usage

```js
const ensureGit = require('ensure-git')

ensureGit()
  .then(() => {
    console.log('All good! you can now run npm publish ;)')
  })
  .catch(err => {
    console.error(err.message)
    process.exit(1)
  })
```

## API

### ensureGit([options])

#### options

##### cwd

Type: `string`<br>
Default: `process.cwd()`

The path to check.

##### anyBranch

Type: `boolean`<br>
Default: `undefined`

By default if it's not on `master` branch the program will throw an error, use this option to disable the behavior.

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D


## Author

**ensure-git** © [egoist](https://github.com/egoist), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by egoist with help from contributors ([list](https://github.com/egoist/ensure-git/contributors)).

> [egoistian.com](https://egoistian.com) · GitHub [@egoist](https://github.com/egoist) · Twitter [@rem_rin_rin](https://twitter.com/rem_rin_rin)
