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
        const { filterByMonth, normalizeMonth } = utils;
        const month = normalizeMonth(monthSpoken);
    
        this.emit(':tell', `There are ${(filterByMonth(month, data.longWeekends)).length} long weekends in the month of ${month}.`);
    },
    'LongWeekendsByMonth': function() {
        const monthSpoken = (this.event.request.intent.slots.Month.value).toLowerCase();
        const { trimDateStr, filterByMonth, normalizeMonth } = utils;
        const month = normalizeMonth(monthSpoken);
        const monthArr = filterByMonth(month, data.longWeekends);
        const count = (monthArr.length === 0) ? 'no' : monthArr.length;
        
        let listHolidays = [];
        
        monthArr.map((week, i) => {
            if (week.requireConnectingLeave === false) {
                listHolidays.push(`${(count > 1 ? i+1 : '')}. With ${week.occassion} being a holiday on ${trimDateStr(new Date(week.holiday_dates))} ${(week.secondaryOccasion ? 'and ' + week.secondaryOccasion + ' on ' + trimDateStr(new Date(week.connectingLeave)) : '')}, you get ${(week.dates).length} days of leaves from ${trimDateStr(new Date(week.dates[0]))} to ${trimDateStr(new Date(week.dates[week.dates.length - 1]))}.`);
            } else {
                listHolidays.push(`${(count > 1 ? i+1 : '')}. With ${week.occassion} being a holiday on ${trimDateStr(new Date(week.holiday_dates))}, take a leave on ${trimDateStr(new Date(week.connectingLeave))} to get ${(week.dates).length} days of leaves from ${trimDateStr(new Date(week.dates[0]))} to ${trimDateStr(new Date(week.dates[week.dates.length - 1]))}.`);
            }
  	        
        });
        
        const combineHolidays = listHolidays.join(', <break time="0.5s"/> ');
    
        this.emit(':tell', `There ${(count > 1 ? 'are' : 'is')} ${count} long ${(count > 1 ? 'weekends' : 'weekend')} in ${month}. ${combineHolidays.replace(/Mar/ig, 'March')}`);
    }
};

exports.handler = (event, context) => {
    const alexa = Alexa.handler(event, context);
    alexa.APP_ID = undefined;
    alexa.registerHandlers(handlers);
    alexa.execute();
};