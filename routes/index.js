const express   =require('express');
const routes    =express.Router();

Router.get('/',function(req,res){
    res.send('라우트를 사용한 메인 페이지');
});

module.exports = router;