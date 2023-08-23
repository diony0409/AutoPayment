const express     = require('express');
const router      = express.Router();

router.get('/', function(req, res) {
    console.log('alksdjlfkjha;flg');
    res.render('class');
});


// router.post('/regression2', async function(req, res) {
// 		//모델 로드
// 		//예측
//     res.send('예측결과');
// });

module.exports = router;