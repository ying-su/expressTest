var dbconfig = require('../config/database')
var util = require('../utils/util')
var log = require('../config/log').logger
var connection = util.handleConnection()

// app/routes.js
module.exports = function(app) {

    /**
     * 首页
     * @param  {[type]} req  [description]
     */
    app.get('/', (req, res) => {
        res.render('index');
    })

    /**
     * 登录
     * @param  {[type]} req  [description]
     */
    app.get('/login', (req, res) => {
        res.render('login')
    })

    /**
     * 注册
     * @param  {[type]} '/regist' [description]
     */
    app.get('/regist', (req, res) => {
        res.render('regist')
    })

    /**
     * 列表
     * @param  {[type]} '/list' [description]
     */
    app.get('/list', (req, res) => {
        res.render('list')
    })


    /**
     * 忘记密码
     * @param  {[type]} '/forgetPwd' [description]
     */
    app.get('/forgetPwd', (req, res) => {
        res.render('forgetPwd')
    })

    /**
     * 登录接口
     * @param  {[type]} req  [description]
     */
    app.post('/api/login', (req, res) => {

        let param = req.body,
            userName = param.userName,
            passWord = param.passWord;

        if (!!userName && !!passWord) {

            //校验用户名和密码
            let selectStr = 'select username from ' + dbconfig.database + '.' + dbconfig.user_table +
                ' where username="' + userName + '" and password="' + passWord + '"';
            connection.query(selectStr, function(err, row) {
                if (err) {
                    log.error(err)
                    util.reConnection(err)
                }

                console.log(row)

                if (row.length > 0) {
                    return res.json({
                        Code: 200,
                        message: '登录成功！'
                    })
                } else {
                    return res.json({
                        Code: 500,
                        message: '用户名或密码错误'
                    })
                }
            })

        } else {
            return res.json({
                Code: 400,
                message: '用户名或密码不能为空'
            })
        }
    })


    /**
     * 注册
     * @param  {[type]} '/api/regist' [description]
     */
    app.post('/api/regist', (req, res) => {

    })


}