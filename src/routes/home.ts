import express from 'express';
const router: express.Router = express.Router();

const news_articles = [
	{ title: "borkdoggo69 works the UCP!", author: "borkdoggo69", publisher: "borkdoggo69", body: "This is a lotta work but it pays off in the end."},
	{ title: "Commodore reviews the UCP!", author: "Commodore", publisher: "borkdoggo69", body: "This UCP is looking great, I can't lie! I really hope it'll be completed soon."}
]

router.get('/', (req, res) => {
	return res.render('home', { articles: news_articles });
});

export default router;