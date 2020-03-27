import express from 'express';
import passport from 'passport';

const router: express.Router = express.Router();

router.get('/', passport.authenticate('steam', { failureRedirect: '/' }), (req: express.Request, res: express.Response) => {
	return res.redirect('/ucp');
});

router.get('/return', passport.authenticate('steam', { failureRedirect: '/' }), (req: express.Request, res: express.Response) => {
	return res.redirect('/ucp');
});

export default router;