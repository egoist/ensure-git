import test from 'ava'
import execa from 'execa'
import ensureGit from './'

test.after(async () => {
  await execa('rm', ['-rf', 'example-main'])
})

test('main', async t => {
  await execa.shell(`
    mkdir -p example-main &&
    cd example-main &&
    git init &&
    git config user.name name &&
    git config user.email email
  `)
  try {
    await ensureGit({cwd: 'example-main'})
  } catch (err) {
    t.is(err.message, 'Unclean working tree. Commit or stash changes first.')
  }
})
