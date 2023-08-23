const express     = require('express');
const router      = express.Router();


router.get('/', function(req, res) {
    console.log('alksdjlfkjha;flg');
	res.render('admin');
});


module.exports = router;