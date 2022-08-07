/**
 * Config source: https://git.io/JOdi5
 *
 * Feel free to let us know via PR, if you find something broken in this config
 * file.
 */

import Env from '@ioc:Adonis/Core/Env'
import { AllyConfig } from '@ioc:Adonis/Addons/Ally'

/*
|--------------------------------------------------------------------------
| Ally Config
|--------------------------------------------------------------------------
|
| The `AllyConfig` relies on the `SocialProviders` interface which is
| defined inside `contracts/ally.ts` file.
|
*/
const allyConfig: AllyConfig = {
	/*
	|--------------------------------------------------------------------------
	| Github driver
	|--------------------------------------------------------------------------
	*/
	github: {
		driver: 'github',
		clientId: Env.get('GITHUB_CLIENT_ID'),
		clientSecret: Env.get('GITHUB_CLIENT_SECRET'),
		callbackUrl: 'http://127.0.0.1:3333/github/callback',
		scopes: ['user:email']
	},
	/*
	|--------------------------------------------------------------------------
	| Google driver
	|--------------------------------------------------------------------------
	*/
	google: {
		driver: 'google',
		clientId: Env.get('GOOGLE_CLIENT_ID'),
		clientSecret: Env.get('GOOGLE_CLIENT_SECRET'),
		callbackUrl: 'http://localhost:3333/google/callback',
		// Google specific
		prompt: 'select_account',
		accessType: 'offline',
		hostedDomain: 'gmail.com',
		display: 'page',
		scopes: ['userinfo.email'],
	},
	/*
	|--------------------------------------------------------------------------
	| Twitter driver
	|--------------------------------------------------------------------------
	*/
	twitter: {
		driver: 'twitter',
		clientId: Env.get('TWITTER_CLIENT_ID'),
		clientSecret: Env.get('TWITTER_CLIENT_SECRET'),
		callbackUrl: 'http://localhost:3333/twitter/callback',
	},
	/*
	|--------------------------------------------------------------------------
	| Discord driver
	|--------------------------------------------------------------------------
	*/
	discord: {
		driver: 'discord',
		clientId: Env.get('DISCORD_CLIENT_ID'),
		clientSecret: Env.get('DISCORD_CLIENT_SECRET'),
		callbackUrl: 'http://localhost:3333/discord/callback',
	},
  /*
  |--------------------------------------------------------------------------
  | LinkedIn driver
  |--------------------------------------------------------------------------
  */
  linkedin: {
    driver: 'linkedin',
    clientId: Env.get('LINKEDIN_CLIENT_ID'),
    clientSecret: Env.get('LINKEDIN_CLIENT_SECRET'),
    callbackUrl: 'http://localhost:3333/linkedin/callback',
  },
  /*
  |--------------------------------------------------------------------------
  | Facebook driver
  |--------------------------------------------------------------------------
  */
  facebook: {
    driver: 'facebook',
    clientId: Env.get('FACEBOOK_CLIENT_ID'),
    clientSecret: Env.get('FACEBOOK_CLIENT_SECRET'),
    callbackUrl: 'http://localhost:3333/facebook/callback',
  },
  /*
  |--------------------------------------------------------------------------
  | Spotify driver
  |--------------------------------------------------------------------------
  */
  spotify: {
    driver: 'spotify',
    clientId: Env.get('SPOTIFY_CLIENT_ID'),
    clientSecret: Env.get('SPOTIFY_CLIENT_SECRET'),
    callbackUrl: 'http://localhost:3333/spotify/callback',
  },

}

export default allyConfig
