'use strict'


const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.get('/products', 'ProductsController.index')


Route.post('/auths', 'AuthController.store')
Route.post('/users', 'UserController.store')

Route.post('/admin/users/:id/uploads', 'UserController.changePhoto')
Route.get('/admin/users/:id/photo', 'UserController.photo')


Route.group(() => {
  Route.resource('users', 'UserController').apiOnly()
}).prefix('admin')

// Route.group(() => {
//   Route.resource('users', 'UserController').apiOnly()
// }).prefix('admin').middleware(['auth'])
