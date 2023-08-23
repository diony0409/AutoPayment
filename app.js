const express = require('express');
const app = express();

//views 디렉토리에서 ejs 엔진
app.set('views',__dirname + '/views');
app.set('view engine', 'ejs');


const mainRouter    =require('./routes/index');
const adminRouter   =require('./routes/admin');

app.use(express.static(__dirname + '/public'));
app.use('/',mainRouter);
app.use('/admin',adminRouter);



const PORT = 8088;

app.listen(PORT, function() {
    console.log('Listening on port: ', PORT);
});