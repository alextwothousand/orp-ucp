import express from 'express';

export default (req: express.Request, res: express.Response, next: any) => {
	req.isAuthenticated() ? next() : res.redirect('/');
}