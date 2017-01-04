const ensure = require('.')

ensure()
  .then(() => {
    console.log('ok!')
  })
  .catch(err => {
    console.error(err.message)
  })
