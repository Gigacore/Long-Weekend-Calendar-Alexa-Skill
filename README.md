# Long Weekend Calendar - Alexa Skill
A conversational custom Alexa Skill for the long weekend calendar of 2018 in India written in Node.js

### WIP 

- [x] How many long weekends in 2018?
- [x] When’s the next long weekend?
- [x] Long weekends in the month X
- [x] Number of long weekends in the month of X
- How many long weekends are left in month of x
- How many long weekends left in 2018 / this year?
- Is this weekend a long weekend?
- Remind me the next / x long weekend.

### Beta Test

This skill is yet to be published. You can beta test with current progress [over here](https://skills-store.amazon.com/deeplink/tvt/ec14b094ef07191c04ccf926232eb550d6bd0b470f9fd0191a9acf1a227ff8e1879f581ac59257b6753487e08538169a0b43ff4cb705a3f427387e8a9a5206c0c6646d403cd62a683f98ed91621dc12acdf8c437613f5c58b926f59a0a79666fa78b6d3e8060ed1671ad9383c032d2).

#### To Start Interacting:

> Say "Open long weekend calendar"

or

> Say "Alexa, ask long weekend calender for next long weekend"

#### You can ask:

> "Long weekends in January"

> "How many long weekends in 2018?"

> "How many long weekends in the month of January?"

### Contribute
Feel free to contribute by forking the repo to add new features or to enhance the existing.

- ```index.js``` contains the primary code for building interactions.
- ```utils.js``` contains additional reusable functionality for interactions.
- ```./data/calendar.json``` contains list of long weekends in an array.
- ```./intent_and_slots/schema.json``` contains the Intents, Slots and custom slot types required to build the "Interaction Model". You can copy paste this in the code editor of Interaction Model builder.
- You can simply zip the content of the repo and upload to either AWS Lambda Functions or host on your server that's SSL enabled.

### Learn

- If you are new to building Skills, learn more about [Alexa Skills Kit (ASK)](https://developer.amazon.com/alexa-skills-kit).
- To learn how to design voice-based interactions, read [Alexa.Design](https://developer.amazon.com/alexa).

#### The MIT License (MIT)
MIT © 2017 Santhosh Sundar
