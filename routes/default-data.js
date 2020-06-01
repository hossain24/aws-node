const router = require('express').Router();

router.route('/').get((req, res) => {
    res.json("This is a node server, running on AWS");
});

module.exports = router;