import express from 'express';
import express_react_views from 'express-react-views';

import bodyParser from 'body-parser';
import session from 'express-session';

import passport from 'passport';
import passport_steam from 'passport-steam';

import path from 'path';
import config from './misc/config';

const app: express.Application = express();

app.use(bodyParser.urlencoded({ extended: true }));

passport.serializeUser(function (user, done) {
	done(null, user);
});

passport.deserializeUser(function (obj, done) {
  	done(null, obj);
});

passport.use(new passport_steam.Strategy ({
    returnURL: `http://localhost:${config.port}/auth/return`,
    realm: `http://localhost:${config.port}/`,
    apiKey: config.steamApiKey
  	},
	function(identifier: any, profile: any, done: any) {
    // asynchronous verification, for effect...
		process.nextTick(function () {

			// To keep the example simple, the user's Steam profile is returned to
			// represent the logged-in user.  In a typical application, you would want
			// to associate the Steam account with a user record in your database,
			// and return that user instead.
			
			//console.log(profile);
			profile.identifier = identifier;
			return done(null, profile);
		});
  	}
));

app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.use(express.static(path.join(__dirname, '/public')));
app.engine('jsx', express_react_views.createEngine());

app.use(session({
    secret: 'your secret',
    name: 'name of session id',
    resave: true,
	saveUninitialized: true}
));

app.use(passport.initialize());
app.use(passport.session());

import homeRouter from './routes/home';
import authRouter from './routes/auth';

import logoutRouter from './routes/logout';
import ucpRouter from './routes/ucp';

import adminRouter from './routes/admin';

app.use('/', homeRouter);
app.use('/auth', authRouter);

app.use('/logout', logoutRouter);
app.use('/ucp', ucpRouter);

app.use('/admin', adminRouter);

app.listen(config.port, () => console.log(`${config.appName} listening on port ${config.port}!`))