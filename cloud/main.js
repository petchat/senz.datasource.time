// Use AV.Cloud.define to define as many cloud functions as you want.
// For example:
var calendar = require('cloud/calendar.js');
require('cloud/app.js');

AV.Cloud.define('debug', function (request, response){
    start_unixtime = request.params.start_unixtime;
    end_unixtime   = request.params.end_unixtime;
    start_time = new Date(start_unixtime);
    end_time   = new Date(end_unixtime);
    console.log('The start time is: ' + start_time);
    console.log('The end time is: ' + end_time);
    //calendar.today(2015, 5, 21);
});

AV.Cloud.define('today', function (request, response){
    thismoment = new Date();
    result = calendar.Day(thismoment.getFullYear(), thismoment.getMonth() + 1, thismoment.getDate());
    response.success(result);
});

//console.log(calendar.today(2015, 5, 21));
//console.log(calendar.Day(2015, 5, 10));

