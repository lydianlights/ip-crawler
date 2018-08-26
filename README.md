# Web Crawler

This is just a little project I did in my spare time. Visits random ip addresses and logs the title of valid web pages. A fun random walk through the internet.

## Setup

Requires node and postgres (results of the crawler are saved to a database).

* Spin up a new postgres database (see postgres docs)
* Create `.env` file in the project root directory (you can copy the provided `example.env`)
* Open `.env` and enter your postgres database connection info, as well as a path for the text log file
* Run `npm install`
* Run `npm run migrate up`
* Run `npm start`
