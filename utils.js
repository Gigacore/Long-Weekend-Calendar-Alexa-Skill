// Normalize Month

// Gets the month utterance spoken by the user and normalizes to standard name.
// For example, "long weekends in {jan}" or "long weekends in {first} month of 2018"
// gets normalized to {january}

exports.normalizeMonth = function(month) {
    let monthVal;
    
    switch (month) {
        case "january":
        case "jan":
        case "1st":
        case "first":
        case "1": {
            monthVal = 'january';
        }
        break;
        case "feb":
        case "february":
        case "2nd":
        case "second":
        case "2": {
            monthVal = 'february';
        }
        break;
        case "mar":
        case "march":
        case "3rd":
        case "third":
        case "3": {
            monthVal = 'march';
        }
        break;
        case "apr":
        case "april":
        case "4th":
        case "fourth":
        case "4": {
            monthVal = 'april';
        }
        break;
        case "may":
        case "5th":
        case "fifth":
        case "5": {
            monthVal = 'may';
        }
        break;
        case "june":
        case "jun":
        case "sixth":
        case "6": {
            monthVal = 'june';
        }
        break;
        case "july":
        case "jul":
        case "seventh":
        case "7": {
            monthVal = 'july';
        }
        break;
        case "august":
        case "aug":
        case "eighth":
        case "8": {
            monthVal = 'august';
        }
        break;
        case "september":
        case "sept":
        case "eighth":
        case "9": {
            monthVal = 'september';
        }
        break;
        case "october":
        case "oct":
        case "10th":
        case "10": {
            monthVal = 'october';
        }
        break;
        case "november":
        case "nov":
        case "9th":
        case "9": {
            monthVal = 'november';
        }
        break;
        case "december":
        case "dec":
        case "10th":
        case "10": {
            monthVal = 'december';
        }
        break;
    }
    
    return monthVal;
};

// Filter By Month
exports.filterByMonth = function(month, arr) {
    let monthArr = [];
    const monthList = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];

    arr.map((week, i) => {
    var thisDate = new Date(week.holiday_dates);
        if (month === monthList[thisDate.getMonth()]) {
    		monthArr.push(week)
        }
    });
    
    return monthArr;
};