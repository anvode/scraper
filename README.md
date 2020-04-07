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

<http://localhost:5050/api/scraper>

## Api

* create a express server provides a route for the webb scraping api
* add url validation
* choose node-fetch for requests. Because of similar client fetch syntax
* add cors module to call with the client domain
* there are several to structure the api. My decision was to have less work at client side

## App

* install node-sass to use sass precompiler
* BEM syntax css classes ans css variables
* state to child components handle with props. Because of less complexity of the project
* url validation to prevent unnecessary request

## Crawl SPA

* it also has to be execute the javascript and render the html. Can possible with Headless Chrome Browser
* puppeteer or selenium

## Production-ready

* client domain will be required
* serve client over express server
* accessibility, browser support
* docker or pm2 to start the server
* CI/CD
* Testing, Staging and Production Environments

## Secure

* protect the routes e.g. token based authentication
* data sanitization fro user input
* limit the body payload with express js body-parser
* .env for environment variables with dotenv

## Scalable

* file structure (models, routes, controllers, services, configs)
* code reusability
* Load Balancer, pm2 cluster mode

## Faster

* Code Splitting
* Lazyload Images
* Server Side Rendering
* Memoisation - store the request in a Object(url|Modified Date)
