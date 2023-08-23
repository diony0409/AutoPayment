const express   =require('express');
const router    =express.Router();

router.get('/',function(req,res){
    res.render('index',{name: '가',age : '33',job:'가'});
});

module.exports = router;