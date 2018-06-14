// server.js
const jsonServer = require('json-server') 
//jsonServer Returns an Express server

const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults(/*options*/)
// options
// static path to static files
// logger enable logger middleware (default: true)
// bodyParser enable body-parser middleware (default: true)
// noCors disable CORS (default: false)
// readOnly accept only GET requests (default: false)

// Create server
server.use(middlewares)
server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})

