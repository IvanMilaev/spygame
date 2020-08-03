
//initialize express router
let router = require('express').Router();
//set default API response
router.get('/', function(req, res) {
    res.json({
        status: 'API Works',
        message: 'Welcome to SPY GAME'
    });
});
//Export API routes
module.exports = router;
