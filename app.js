const express = require('express');
const app = express();

app.set('views',__dirname + '/views');
app.set('view engine',ejs);


const mainRouter    =require('./routes/index');

app.use('/',mainRouter);

const PORT = 8088;
app.listen(PORT, function() {
    console.log('Listening on port: ', PORT);
});