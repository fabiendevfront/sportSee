![logo](src/assets/logo_readme.png)

## Presentation

SportSee is an application for athletes who want to track their daily progress with an analytical dashboard.

## Requirements

* [NodeJS](https://nodejs.org/en/)
* [NPM](https://www.npmjs.com/)
* [Yarn](https://yarnpkg.com/)

## Dependencies

* "prop-types": "^15.8.1",
* "react": "^18.2.0",
* "react-router-dom": "^6.6.1",
* "recharts": "^2.2.0",
* "sass": "^1.57.1"
* "jsdoc": "^4.0.0"

## Launching the project

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Backend

* Clone the Backend [https://github.com/fabiendevfront/sportSee_Backend](https://github.com/fabiendevfront/sportSee_Backend)
* The `yarn` command will allow you to install the dependencies.
* The `yarn dev` command will allow you to run the micro API at http://localhost:3000

### Frontend

* Clone the Frontend [https://github.com/fabiendevfront/sportSee](https://github.com/fabiendevfront/sportSee)
* Inside the project directory install dependencies `npm install`
* Start application with `npm start`, allow you to run at http://localhost:3001
* For generate JSDoc `npm run docs`


## Possible endpoints of micro API

This project includes four endpoints that you will be able to use:

* `http://localhost:3000/user/${userId}` - retrieves information from a user. This first endpoint includes the user id, user information (first name, last name and age), the current day's score (todayScore) and key data (calorie, macronutrient, etc.).
* `http://localhost:3000/user/${userId}/activity` - retrieves a user's activity day by day with kilograms and calories.
* `http://localhost:3000/user/${userId}/average-sessions` - retrieves the average sessions of a user per day. The week starts on Monday.
* `http://localhost:3000/user/${userId}/performance` - retrieves a user's performance (energy, endurance, etc.).


**Warning, currently only two users have been mocked. They have userId 12 and 18 respectively.**

### Examples of queries

* `http://localhost:3000/user/12/performance` - Retrieves the performance of the user with id 12
* `http://localhost:3000/user/18` - Retrieves user 18's main information.