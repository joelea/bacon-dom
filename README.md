[![Build Status](https://travis-ci.org/joelea/bacon-dom.svg?branch=develop)](https://travis-ci.org/joelea/bacon-dom)

### Usage

Create a stream of virtual-dom HTML trees, attach them to a real node.

```
var Bacon = require("baconjs");
var h = require("virtual-dom/h")
var attach = require("../main/bacon-dom");

var ticks = Bacon.interval(1000, null);
var count = ticks.scan( (sum, newValue) => sum + 1 );
var html = count.changes().map( (n) => h('.count', [String(n)]) )

attach(html).to(document.body);
```

### Dev

* Build with ```npm run build```
* Test once with ```npm test```
* Run tests with watch using ```./node_modules/.bin/karma start```




