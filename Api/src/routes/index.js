const {Router} = require('express');

const GitRepository = require('../controllers/GitRepository');

const router = Router();

router.get('/api/:repository/:count', GitRepository);

module.exports = router;