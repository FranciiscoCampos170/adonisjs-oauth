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

import User from 'App/Models/User'
import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async ({ view }) => {
  return view.render('welcome')
})

Route.get('/auth',async ({view}) => { 
  return view.render('auth')
 })

 Route.get('/home',async ({view}) => { 
  return view.render('home')
 })


 Route.get('/github/redirect', async ({ ally }) => {
  return ally
  .use('github')
  .redirect((redirectRequest) => {
    redirectRequest.scopes(['gist', 'user'])
  })

  
}).as('loginGithub')


Route.get('/google/redirect',async ({ally}) => {
  return ally
  .use('google')
  .redirect((redirectRequest) => {
    redirectRequest.scopes(['userinfo.email'])
  })
}).as('loginGoogle')


//Login With GithHub
Route.get('github/callback', async ({ ally, auth, view  }) => {
  const github = ally.use('github')

  /**
   * Managing error states here
   */

  const githubUser = await github.user()

  /**
   * Find the user by email or create
   * a new one
   */
  const user = await User.firstOrCreate({
    email: githubUser.email,
  }, {
    name: githubUser.name,
    accessToken: githubUser.token.token,
    isVerified: githubUser.emailVerificationState === 'verified'
  })

  /**
   * Login user using the web guard
   */
  await auth.use('web').login(user)
  return view.render('home')

}).as('callback')


//Login With Google
Route.get('google/callback', async ({ ally, auth, view  }) => {
  const google = ally.use('google').stateless()

  /**
   * Managing error states here
   */

  const googleUser = await google.user()

  /**
   * Find the user by email or create
   * a new one
   */
  const user = await User.firstOrCreate({
    email: googleUser.email,
  }, {
    name: googleUser.name,
    accessToken: googleUser.token.token,
    isVerified: googleUser.emailVerificationState === 'verified'
  })

  /**
   * Login user using the web guard
   */
  await auth.use('web').login(user)
  return view.render('home')

}).as('callback_google')

