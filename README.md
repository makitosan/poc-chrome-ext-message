# poc-chrome-ext-message
POC of sharing a variable from page .js to Chrome ext background .js

# DEV ENV

To prepare a dev env for this Chrome extension project, the article from "corey cleary" was very useful. I appreciate sharing such a great article. The points in my mind was

* Use Babel for ES6
* Use webpack-dev-server for easy browser based testing

The source file is hosted on github.com https://github.com/coreyc/reading-list .

# LAUNCH
TWO(2) terminals are required ;). One is for testing the webpage, the other one is for testing Chrome extension. Since webpack-dev-server does NOT save re-built files but save it in memory, it is required to save it into actual file system, before reloading Chrome extension.

## Launch webpack-dev-server

```
npm run server
```

## Launch webpack --watch

```
npm run watch
```
