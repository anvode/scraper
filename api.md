## Modules

<dl>
<dt><a href="#module_api">api</a></dt>
<dd><p>Express app for web scraper api</p>
</dd>
<dt><a href="#module_routes/api/scraper">routes/api/scraper</a></dt>
<dd><p>Express router providing web scraping api</p>
</dd>
<dt><a href="#module_services/scraper">services/scraper</a></dt>
<dd><p>Fetch url and return a json object with expected properties</p>
</dd>
<dt><a href="#module_scraper utils">scraper utils</a></dt>
<dd><p>Helper Functions for Web Scraper</p>
</dd>
</dl>

<a name="module_api"></a>

## api
Express app for web scraper api

**Requires**: <code>module:express</code>  
<a name="module_routes/api/scraper"></a>

## routes/api/scraper
Express router providing web scraping api

**Requires**: <code>module:express</code>  
<a name="module_services/scraper"></a>

## services/scraper
Fetch url and return a json object with expected properties

**Requires**: <code>module:node-fetch,</code>  

* [services/scraper](#module_services/scraper)
    * [~scraper(url)](#module_services/scraper..scraper) ⇒ <code>Promise</code>
        * [~responseObject](#module_services/scraper..scraper..responseObject) : <code>object</code>

<a name="module_services/scraper..scraper"></a>

### services/scraper~scraper(url) ⇒ <code>Promise</code>
Main function which returns the expected object

**Kind**: inner method of [<code>services/scraper</code>](#module_services/scraper)  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | url which has to be scraped |

<a name="module_services/scraper..scraper..responseObject"></a>

#### scraper~responseObject : <code>object</code>
the response Object

**Kind**: inner constant of [<code>scraper</code>](#module_services/scraper..scraper)  
<a name="module_scraper utils"></a>

## scraper utils
Helper Functions for Web Scraper

**Require**: cheerio, image-size, node-fetch, url  

* [scraper utils](#module_scraper utils)
    * [~getHtmlVersion(root)](#module_scraper utils..getHtmlVersion) ⇒ <code>string</code>
    * [~getHeadings(elements)](#module_scraper utils..getHeadings) ⇒ <code>string</code> \| <code>Array</code>
    * [~getImages(elements, scrapeUrl)](#module_scraper utils..getImages) ⇒ <code>Promise</code>
    * [~getLinks(elements, scrapeUrl)](#module_scraper utils..getLinks) ⇒ <code>string</code> \| <code>Object</code>
    * [~absolutePath(str, scrapeUrl)](#module_scraper utils..absolutePath)

<a name="module_scraper utils..getHtmlVersion"></a>

### scraper utils~getHtmlVersion(root) ⇒ <code>string</code>
Return the right HTML version

**Kind**: inner method of [<code>scraper utils</code>](#module_scraper utils)  

| Param | Type |
| --- | --- |
| root | <code>Array</code> | 

<a name="module_scraper utils..getHeadings"></a>

### scraper utils~getHeadings(elements) ⇒ <code>string</code> \| <code>Array</code>
Returns all Headings if exist otherwise a string

**Kind**: inner method of [<code>scraper utils</code>](#module_scraper utils)  

| Param | Type |
| --- | --- |
| elements | <code>Array</code> | 

<a name="module_scraper utils..getImages"></a>

### scraper utils~getImages(elements, scrapeUrl) ⇒ <code>Promise</code>
Returns all Images if exist otherwise a string

**Kind**: inner method of [<code>scraper utils</code>](#module_scraper utils)  

| Param | Type |
| --- | --- |
| elements | <code>Array</code> | 
| scrapeUrl | <code>String</code> | 

<a name="module_scraper utils..getLinks"></a>

### scraper utils~getLinks(elements, scrapeUrl) ⇒ <code>string</code> \| <code>Object</code>
Returns all Links if exist otherwise a string

**Kind**: inner method of [<code>scraper utils</code>](#module_scraper utils)  

| Param | Type |
| --- | --- |
| elements | <code>Array</code> | 
| scrapeUrl | <code>String</code> | 

<a name="module_scraper utils..absolutePath"></a>

### scraper utils~absolutePath(str, scrapeUrl)
Check if url have absolute path

**Kind**: inner method of [<code>scraper utils</code>](#module_scraper utils)  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | url to check |
| scrapeUrl | <code>string</code> | url which is scraping |

