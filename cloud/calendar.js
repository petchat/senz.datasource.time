/**
 * Created by MeoWoodie on 5/7/15.
 */
var LunarCalendar = require("lunar-calendar");
var underscore    = require("underscore");

// Get today's basic infomation
var getDayLunarInfo = function(year, month, day){
    // Get this month's basic info from third-part module, named lunar-calendar.
    var this_month = LunarCalendar.calendar(year, month);
    // Validation of the range of input.
    if (day <= this_month['monthDays'] && this_month['monthDays'] != undefined) {
        var this_day = this_month['monthData'][day - 1];
        return this_day;
    }
    else{
        return undefined;
    }
};

var getDayType = function (year, month, day){
    var date = new Date();
    date.setFullYear(year);
    date.setMonth(month - 1);
    date.setDate(day);
    var day = date.getDay();
    console.log(date);
    console.log('day : ' + day);
    if (day == 0 || day == 6){
        return {'dayType': 'vacation'};
    }
    else  {
        return {'dayType': 'work_day'};
    }
};

var getWeekDay = function (year, month, day){
    var the_day  = new Date(year, month, day, 0, 0, 0, 0);
    return {'week_day': the_day.getDay()};
};

// Get today's infomation.
exports.Day = function (year, month, day){
    var Day    = {};
    //day_type   = getDayType(year, month, day);
    week_day   = getWeekDay(year, month, day);
    lunar_info = getDayLunarInfo(year, month, day);
    //underscore.extend(Day, day_type);
    underscore.extend(Day, week_day);
    underscore.extend(Day, lunar_info);
    return Day;
};

