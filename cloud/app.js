3000// 在 Cloud code 里初始化 Express 框架
var express = require('express');
var app = express();
var calendar = require('cloud/calendar.js');

// App 全局配置
app.set('views','cloud/views');   // 设置模板目录
app.set('view engine', 'ejs');    // 设置 template 引擎
//app.use(express.bodyParser());    // 读取请求 body 的中间件

// 使用 Express 路由 API 服务 /hello 的 HTTP GET 请求
app.get('/hello', function(req, res) {
  res.render('hello', { message: 'Congrats, you just set up your app!' });
});

app.get('/today', function(req, res) {
    var thismoment = new Date(),
        result = calendar.Day(thismoment.getFullYear(), thismoment.getMonth() + 1, thismoment.getDate());
    res.json(result);
});

app.get("/timeInfo", function (req, res){
    var timestamp_list = req.query.timestampList.split(",");
    var result         = [];
    timestamp_list.forEach(function (timestamp){
        var date = new Date(parseInt(timestamp));
        var res  = calendar.Day(date.getFullYear(), date.getMonth() + 1, date.getDate());
        result.push(res);
    });
    res.json(result);
});

// 最后，必须有这行代码来使 express 响应 HTTP 请求
app.listen();

