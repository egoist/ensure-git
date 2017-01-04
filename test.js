import test from 'ava'
import execa from 'execa'
import ensureGit from './'

test.after(async () => {
  await execa('rm', ['-rf', 'example-main'])
})

test('main', async t => {
  await execa('mkdir', ['-p', 'example-main'])
  await execa('git', ['config', 'user.name', 'name'], {cwd: 'example-main'})
  await execa('git', ['config', 'user.email', 'email'], {cwd: 'example-main'})
  try {
    await ensureGit({cwd: 'example-main'})
  } catch (err) {
    t.is(err.message, 'Unclean working tree. Commit or stash changes first.')
  }
})
