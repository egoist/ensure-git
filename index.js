const execa = require('execa')

/**
 * Credits
 * @link https://github.com/sindresorhus/np/blob/master/lib/git.js
 */
module.exports = function (options) {
  options = options || {}
  const anyBranch = options.anyBranch
  const cwd = options.cwd || process.cwd()

  const actions = [
    // Check local working tree
    execa.stdout('git', ['status', '--porcelain'], {cwd})
      .then(status => {
        if (status !== '') {
          throw new Error('Unclean working tree. Commit or stash changes first.')
        }
      }),
    // Check remote history
    execa.stdout('git', ['rev-list', '--count', '--left-only', '@{u}...HEAD'], {cwd})
      .then(result => {
        if (result !== '0') {
          throw new Error('Remote history differs. Please pull changes.')
        }
      })
  ]

  if (!anyBranch) {
    actions.push(
      // check current branch
      execa.stdout('git', ['symbolic-ref', '--short', 'HEAD'], {cwd})
        .then(branch => {
          if (branch !== 'master') {
            throw new Error('Not on `master` branch.')
          }
        })
    )
  }

  return Promise.all(actions)
}
