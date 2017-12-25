/* eslint-disable  func-names */
/* global fetch */
/* eslint quote-props: ["error", "consistent"]*/

'use strict';

const Alexa = require('alexa-sdk');
const utils = require('./utils.js');
const data = require('./data/calendar.json');

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