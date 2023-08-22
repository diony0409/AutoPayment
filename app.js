const express = require('express');
const app = express();

app.set('views',__dirname + '/views');
app.set('view engine', 'ejs');


const mainRouter    =require('./routes/index');
const adminRouter   =require('./routes/admin');

app.use(express.static(__dirname + '/public'));
app.use('/',mainRouter);
app.use('admin',adminRouter);


app.get('/admin', function(req, res) {
	res.sendFile(__dirname + '/html/admin.html');
});
const PORT = 8088;
app.listen(PORT, function() {
    console.log('Listening on port: ', PORT);
});