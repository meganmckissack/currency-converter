#### By _**Megan McKissack**_

## Description

This currency converter app allows you to covert US Dollars in to other currencies using the ExchangeRate API.

## Technologies Used

- _HTML_
- _CSS_
- _JavaScript_
- _Webpack_
- _npm_
- _Apis_

## Setup/Installation Requirements

- clone or download this repository to your computer
- run the `npm install` command in your terminal to install all the necessary node modules and packages, if you don't have npm installed on your computer, follow the instructions to install it on the [npm documentation site](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- Open files in your favorite text editor or IDE
- For the currency conversion to work you'll need to make a call to the [exchange rate API](https://www.exchangerate-api.com/) using you're own unique api key.
  - You'll need to create an free account on the exchange rate API to get a key.
  - To savely store your API key, create a `.env` file in the top level of your directory and include `.env` in the `.gitignore` file.
  - Commit your `.gitignore` file before doing the next step.
  - Add your API key as a variable in your `.env` file, exaclty as this example `API_KEY=YourAPIKey`. This allows your key to be passed into the api call to retrun the exchange data.
- To make changes and/or view the site, run the `npm run start` command in your terminal, it will spin up a local server and open the site in your browser
- To build the site for hosting, run the `npm run build` command in your terminal and it will generate a `bundle.js` and `index.html` file in a folder labeled dist

## Known Bugs

_none_

## License

_MIT_

Copyright (c) _June 4, 2022_ _Megan McKissack_
