/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/


import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async ({ view }) => {
  return view.render('welcome')
})

Route.get('/auth',async ({view}) => { 
  return view.render('auth')
 })

 Route.get('/github/redirect', async ({ ally }) => {
  return ally.use('github').redirect()
}).as('loginGithub')

Route.get('github/callback', async ({ ally }) => {
  const github = ally.use('github')

  /**
   * User has explicitly denied the login request
   */
  if (github.accessDenied()) {
    return 'Access was denied'
  }

  /**
   * Unable to verify the CSRF state
   */
  if (github.stateMisMatch()) {
    return 'Request expired. Retry again'
  }

  /**
   * There was an unknown error during the redirect
   */
  if (github.hasError()) {
    return github.getError()
  }

  /**
   * Finally, access the user
   */
  const user = await github.user()
}).as('callback')


