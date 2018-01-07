/*!
  * get-country.js
  * This module contains code for country code, it will get IP address of user and provides country code in uppercase example: IN, US.
  * 
  * @date     2018-01-07 (YYYY-MM-DD)
  * @author   Gurpreet Singh, <gurupreetsingh2000@gmail.com>
  * @example  
  * const ip = require('./get-country');
  * ip.getData(data => {
  *   console.log(data);  // Country Code
  * });
  *
*/
const Where = require('node-where');
const Https = require('https');
const IpServiceEndpoint = 'https://www.l2.io/ip.js?var=ip_address';

exports.getData = (callback) => {
  Https.get(IpServiceEndpoint, response => {
    let ipData = '';

    response.on('data', chunk => {
      ipData += chunk;
    });

    response.on('end', () => {
      let ip_address = ipData.replace(/[a-zA-Z_="';\s]/g, '');
      Where.is(ip_address, function(err, result) {
        callback(result.get('countryCode') || 'IN');
      });
    });
    
  }).on('error', err => {
    console.log('Error: ' + err.message);
    callback(err.message);
  });
};
