/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/

'use strict';

const Alexa = require('alexa-sdk');
const utils = require('./utils.js');

const data = {
    longWeekends: [
        {
            "occassion": "Basanth Panchami",
            "holiday_dates": 1516602600000,
            "requireConnectingLeave": false,
            "dates": [
                1516429800000,
                1516516200000,
                1516602600000
            ]
        },
        {
            "occassion": "Republic Day",
            "holiday_dates": 1516948200000,
            "requireConnectingLeave": false,
            "dates": [
                1516948200000,
                1517034600000,
                1517121000000
            ]
        },
        {
            "occassion": "Mahashivratri",
            "holiday_dates": 1518503400000,
            "requireConnectingLeave": true,
            "connectingLeave": 1518417000000,
            "dates": [
                1518244200000,
                1518330600000,
                1518417000000,
                1518503400000
            ]
        },
        {
            "occassion": "Holi",
            "holiday_dates": 1519972200000,
            "requireConnectingLeave": true,
            "connectingLeave": 1519885800000,
            "dates": [
                1519885800000,
                1519972200000,
                1520058600000,
                1520145000000
            ]
        },
        {
            "occassion": "Good Friday",
            "holiday_dates": 1522391400000,
            "requireConnectingLeave": true,
            "connectingLeave": 1522305000000,
            "dates": [
                1522305000000,
                1522391400000,
                1522477800000,
                1522564200000
            ]
        },
        {
            "occassion": "Labor Day",
            "holiday_dates": 1525156200000,
            "requireConnectingLeave": true,
            "connectingLeave": 1525069800000,
            "dates": [
                1524897000000,
                1524983400000,
                1525069800000,
                1525156200000
            ]
        },
        {
            "occassion": "Ed-Ul-Fitr",
            "holiday_dates": 1529044200000,
            "requireConnectingLeave": false,
            "dates": [
                1529044200000,
                1529130600000,
                1529217000000,
            ]
        }
    ]
};

const handlers = {
    'LaunchRequest': function() {
        this.emit('Init');
    },
    'Init': function() {
        const greetingMsg = "Welcome to Long Weekend Calendar of 2018. You can ask when's the next long weekend. For more, please say help.";
        this.emit(':ask', greetingMsg);
    },
    'TotalLongWeekends': function() {
        const noOfLongWeekends = `There are ${(data.longWeekends).length} possible long weekends in 2018!`;
        this.emit(':tell', noOfLongWeekends);
    },
    'NextLongWeekend': function() {
        const getDate = new Date();
        const today = Date.parse(getDate);
        const weekendArr = data.longWeekends;
        let nextLongWeekend = '';
        
        for(let i = 0; i < weekendArr.length; i++) {
        	if(today < weekendArr[i].holiday_dates) {
        		nextLongWeekend = weekendArr[i];
        		break;
            }
        }
        this.emit(':tell', `Next long weekend is ${nextLongWeekend.occassion}.`);
    },
    'CountByMonth': function() {
        const monthSpoken = (this.event.request.intent.slots.Month.value).toLowerCase();
        const month = utils.normalizeMonth(monthSpoken);
    
        this.emit(':tell', `There are ${(utils.filterByMonth(month, data.longWeekends)).length} long weekends in the month of ${month}.`);
    },
    'LongWeekendsByMonth': function() {
        const monthSpoken = (this.event.request.intent.slots.Month.value).toLowerCase();
        const month = utils.normalizeMonth(monthSpoken);
        const monthArr = utils.filterByMonth(month, data.longWeekends);
        const count = monthArr.length;
        let isTentative = false;
        
        let listHolidays = [];
        
        monthArr.map((week, i) => {
            if (week.requireConnectingLeave === false) {
                listHolidays.push(`${i+1}. With ${week.occassion} being a holiday on ${new Date(week.holiday_dates).toString().slice(0,10)}, you get ${(week.dates).length} days of leaves from ${new Date(week.dates[0]).toString().slice(0,10)} to ${new Date(week.dates[week.dates.length - 1]).toString().slice(0,10)}.`);    
            } else {
                listHolidays.push(`${i+1}. With ${week.occassion} being a holiday on ${new Date(week.holiday_dates).toString().slice(0,10)}, take a leave on ${new Date(week.connectingLeave).toString().slice(0,10)} to get ${(week.dates).length} days of leaves from ${new Date(week.dates[0]).toString().slice(0,10)} to ${new Date(week.dates[week.dates.length - 1]).toString().slice(0,10)}.`);
            }
  	        
        });
        
        const combineHolidays = listHolidays.join(', ');
    
        this.emit(':tell', `There are ${count} long weekends in the month of ${month}. ${combineHolidays}`);
    }
};

exports.handler = (event, context) => {
    const alexa = Alexa.handler(event, context);
    alexa.APP_ID = undefined;
    alexa.registerHandlers(handlers);
    alexa.execute();
};