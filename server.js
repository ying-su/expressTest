// server.js
var express = require('express')
var app = express()
var port = process.env.PORT || 8080
var ejs = require('ejs')
var bodyParser = require('body-parser')

//设置html引擎
app.engine('html', ejs.renderFile)
//设置视图引擎
app.set('view engine', 'html')
//托管静态文件
app.use(express.static('public'))

app.use(bodyParser.urlencoded({
  extended: true
}));
//限制参数大小
app.use(bodyParser.json({limit: '2048kb'}));

//引入路由
require('./app/routes')(app)

app.listen(port);
console.log('The magic happens on port ' + port);