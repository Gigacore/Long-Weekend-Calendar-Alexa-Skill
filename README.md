# Long Weekend Calendar - Alexa Skill
A conversational custom skill for long weekend calendar of 2018 in India written in Node.js

The Long Weekend Calendar lets you plan your holiday. It contains all the possible long weekends in India for the calendar year of 2018. It also suggests any connecting leaves that you might have to take to effectively use your vacation time at work.

### WIP 

- [x] How many long weekends in 2018?
- [x] When’s the next long weekend?
- [x] Long weekends in the month X
- [x] Number of long weekends in the month of X
- [x] How many long weekends left in 2018 / this year?
- How many long weekends are left in month of x
- Is this weekend a long weekend?
- Remind me the next / x long weekend.

### Beta Test

This skill is pending certification to be published. You can beta test with current state-of-readiness [over here](https://skills-store.amazon.com/deeplink/tvt/ec14b094ef07191c04ccf926232eb550d6bd0b470f9fd0191a9acf1a227ff8e1879f581ac59257b6753487e08538169a0b43ff4cb705a3f427387e8a9a5206c0c6646d403cd62a683f98ed91621dc12acdf8c437613f5c58b926f59a0a79666fa78b6d3e8060ed1671ad9383c032d2).

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

### Contribute, Remix, Distribute and Share!
Feel free to contribute by forking the repo to add new features, enhance or build one for long weekends in your country by updating the JSON. You are free to use this code base to build and publish a derivate of this Skill. It is optional to give a credit, much appreciated if you do so.

- ```index.js``` contains the primary code for building interactions.
- ```utils.js``` contains additional reusable functionality for interactions.
- ```./data/calendar.json``` contains list of long weekends in an array.
- ```./intent_and_slots/schema.json``` contains the Intents, Slots and custom slot types required to build the "Interaction Model".
- You can simply zip the content of the repo and upload to either create a Function on AWS Lambda or host it on your SSL-enabled web server.
  - Copy the ```Intents``` and ```Slots``` schema JSON to the code editor in Interaction Model builder.
  - Save and Build.
  - Test and Publish

### Learn

- If you are new to building Skills, learn more about [Alexa Skills Kit (ASK)](https://developer.amazon.com/alexa-skills-kit).
- To learn how to design voice-based interactions, read [Alexa.Design](https://developer.amazon.com/alexa).

#### The MIT License (MIT)
MIT © 2017 Santhosh Sundar
