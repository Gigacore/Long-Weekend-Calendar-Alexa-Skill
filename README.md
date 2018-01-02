# Long Weekend Calendar - Alexa Skill

![Screenshot](https://image.ibb.co/e9XLsG/alexa_long_weekend_calendar_banner_min.gif)

A conversational custom skill for long weekend calendar of 2018 in India written in Node.js

The Long Weekend Calendar lets you plan your holiday. It contains all the possible long weekends in India for the calendar year of 2018. It also suggests any connecting leaves that you might have to take to effectively use your vacation time at work.

### Try it out!

The Skill is currently live in India and you can try it out on your Alexa device. You can directly enable it [here](https://alexa.amazon.in/spa/index.html#skills/dp/B078MYWN3S/?ref=skill_dsk_skb_sr_0) or by going to Skills section in your Alexa app and search for ```Long Weekends in 2018```.

Also available in [US](https://www.amazon.com/dp/B078MYWN3S/ref=sr_1_1?s=digital-skills&ie=UTF8&qid=1514442155&sr=1-1&keywords=long+weekend) and [UK](https://www.amazon.co.uk/dp/B078MYWN3S/ref=sr_1_1?s=digital-skills&ie=UTF8&qid=1514442297&sr=1-1&keywords=long+weekend).

#### To start a conversation:

> Say "Open long weekend calendar"

##### Phrases you can try:

> "Long weekends in January"

> "How many long weekends in 2018?"

> "Long weekends in the second month of 2018"

> "How many long weekends in the month of January?"

> "How many long weekends are left this year?"

#### For a Single Interaction:

> Say "Alexa, ask long weekend calender for next long weekend"

### State of Readiness 

- [x] How many long weekends in 2018?
- [x] When’s the next long weekend?
- [x] Long weekends in the month X
- [x] Number of long weekends in the month of X
- [x] How many long weekends left in 2018 / this year?
- How many long weekends are left in month of x
- Is this weekend a long weekend?
- Remind me the next / x long weekend.

### Contribute, Remix, Distribute and Share!
Feel free to contribute by forking the repo to add new features, enhance or build one for long weekends in your country by updating the JSON. You are free to use this code base to build and publish a derivate of this Skill. It is optional to give a credit, much appreciated if you do so.

- ```index.js``` contains the primary code for building interactions.
- ```utils.js``` contains additional reusable functionality for interactions.
- ```./data/calendar.json``` contains list of long weekends in an array.
- ```./intent_and_slots/schema.json``` contains the Intents, Slots and custom slot types required to build the "Interaction Model".
- You can simply zip the content of the repo and upload to either create a Function on AWS Lambda or host it on your SSL-enabled web server.
  - Copy the ```Intents``` and ```Slots``` schema JSON to the code editor in Interaction Model builder.
  - Save and Build.
  - Make necessary changes to the ```calendar.json```
  - Test and Publish

### Learn

- If you are new to building Skills, learn more about [Alexa Skills Kit (ASK)](https://developer.amazon.com/alexa-skills-kit).
- To learn how to design voice-based interactions, read [Alexa.Design](https://developer.amazon.com/alexa).

#### The MIT License (MIT)
MIT © 2017 Santhosh Sundar
