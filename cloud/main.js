// Use AV.Cloud.define to define as many cloud functions as you want.
// For example:
var calendar = require('cloud/calendar.js');
require('cloud/app.js');

AV.Cloud.define('debug', function (request, response){
    var start_unixtime = request.params.start_unixtime,
        end_unixtime   = request.params.end_unixtime,
        start_time     = new Date(start_unixtime),
        end_time       = new Date(end_unixtime);
    console.log('The start time is: ' + start_time);
    console.log('The end time is: ' + end_time);
    //calendar.today(2015, 5, 21);
});

AV.Cloud.define('today', function (request, response){
    var thismoment = new Date(),
        result     = calendar.Day(thismoment.getFullYear(), thismoment.getMonth() + 1, thismoment.getDate());
    response.success(result);
});

AV.Cloud.define('timestamp_list', function (request, response){
    //result = calendar.Day(thismoment.getFullYear(), thismoment.getMonth() + 1, thismoment.getDate());
    var timestamp_list = request.params.timestampList;
    var result         = [];
    timestamp_list.forEach(function (timestamp){
        var date = new Date(timestamp);
        var res  = calendar.Day(date.getFullYear(), date.getMonth() + 1, date.getDate());
        result.push(res);
    });
    response.success(result);
});

//console.log(calendar.today(2015, 5, 21));
//console.log(calendar.Day(2015, 5, 10));

