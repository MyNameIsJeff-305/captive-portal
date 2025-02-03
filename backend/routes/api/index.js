const router = require('express').Router();

router.get('/api/csrf/restore', (_req, _res) => {
    if (process.env.NODE_ENV !== 'production') {
        router.get('/api/csrf/restore', (req, res) => {
            res.cookie('XSRF-TOKEN', req.csrfToken());
            return res.json({});
        });
    }
});

module.exports = router;