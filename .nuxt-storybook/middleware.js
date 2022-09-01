const middleware = {}

middleware['guest'] = require('..\\middleware\\guest.js')
middleware['guest'] = middleware['guest'].default || middleware['guest']

middleware['is-admin'] = require('..\\middleware\\is-admin.js')
middleware['is-admin'] = middleware['is-admin'].default || middleware['is-admin']

export default middleware
