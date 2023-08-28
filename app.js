const express = require('express');
const app = express();

//views 디렉토리에서 ejs 엔진
app.set('views',__dirname + '/views');
app.set('view engine', 'ejs');

console.log('sdf');
const mainRouter    =require('./routes/index');
const adminRouter   =require('./routes/admin');
const classRouter   =require('./routes/class');

app.use(express.static(__dirname + '/public'));
app.use('/',mainRouter);
app.use('/admin',adminRouter);
app.use('/class',classRouter);

//이미지 업로드 경로
const path = require('path');
const publicPath = path.join(__dirname, 'public');
app.use(express.static(publicPath));


const PORT = 8088;

const ejs = require('ejs')
const mysql = require('mysql')

app.set('ejs', ejs.renderFile)

const con = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: '1234',
    database: 'productservice'
});

app.get('/',(req, res) => {

    con.query('select * from title', function (err, results, fields) {
        if (err) throw err
        res.render('index.ejs', { content: results})
    });
})

app.listen(PORT, function() {
    console.log('Listening on port: ', PORT);
});