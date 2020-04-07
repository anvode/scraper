# SCRAPER

## Get Started

```

git clone git@github.com:anvode/scraper.git directory
cd directory
npm install
npm serve:all

```

## General

`tools and scripts`

* jest, fetch-mock-jest, supertest -> tests
* eslint -> linting
* husky and lint-staged -> pre commit hook
* supertest -> tests
* add npm scripts for `test, client, server & both`

`npm run serve:all`

run both server

`client`

<http://localhost:3000>

`server`

<http://localhost:5050>

## Api

* create a express server provides a route for the webb scraping api
* add url validation
* choose node-fetch for requests. Because of similar client fetch syntax
* add cors module to call with the client domain
* there are several to structure the api. My decision was to have less work at client side

## App

* install node-sass to use sass precompiler
* BEM syntax css classes ans css variables
* to handle state decide for props. Because of less complexity
* url validation to prevent unnecessary request

## Explain
