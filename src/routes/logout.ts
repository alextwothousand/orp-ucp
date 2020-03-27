import express from 'express';
import ensureAuthenticated from '../misc/ensureAuthenticated';
const router: express.Router = express.Router();

router.get('/', ensureAuthenticated, (req: express.Request, res: express.Response) => {
	req.logout();
	res.redirect('/');
});

export default router;