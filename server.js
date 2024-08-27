const jsonServer = require('json-server')
const auth = require('json-server-auth')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

// /!\ Bind the router db to the app
server.db = router.db

// You must apply the auth middleware before the router
server.use(middlewares)
server.use(auth)
server.use(router)

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`)
})
