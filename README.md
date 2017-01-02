# Exitent

[![npm](https://img.shields.io/npm/dt/Exitent.svg)](https://www.npmjs.com/package/Exitent)

Exitent is a light-weight Exit Intent detection library.  Use Exitent to detect if someone is leaving your site and will fire several events.

----------

## Installation

The library may be installed from NPM using the following command:

  npm install --save Exitent

Or, if you would rather -- it may be included directly inline within your HTML document.

    <script src="./dist/exitent.min.js></script>

----------

## Default Configuration

```javascript
{
  'threshold': 50,
  'maxDisplays': 1,
  'eventThrottle': 500,
  'checkReferrer': true,
  'storageName': 'exitent-visited',
  'storageLife': 7,
  'preExitent': null,
  'onExitent': null,
  'postExitent': null
}
```

-   `threshold` maximum distance in pixels from the top of the page to consider triggering for.
-   `maxDisplays` the maximum number of times the event(s) may be triggered on a page.
-   `eventThrottle` the amount of time to wait in milliseconds to invoke the handler responsible for scroll events.
-   `checkReferrer` whether or not to check the referring page to see if it's on the same domain and this isn't the first pageview.
-   `storageName` the name/key to store the localStorage item (or cookie) under.
-   `storageLife` the expiration in days of the localStorage item (or cookie).
-   `preExitent` function to call when before an exit intent has been detected. This accepts no arguments since none are necessary.
-   `onExitent` function to call when an exit intent has been detected. This accepts no arguments since none are necessary.
-   `postExitent` function to call when after an exit intent has been detected. This accepts no arguments since none are necessary.

----------

## API Methods

### constructor

Initialise your Exit Intent detection with specified user options.

**Parameters**

-   `options` **[object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** a configuration option defining the settings for exit detection.

**Example**

```javascript
var e = new Exitent({
  'threshold': 10,
  'maxDisplays': 3,
  'checkReferrer': false,
  'onExitent': function() {
    console.log('Exit Intent Detected')
  }
});
```
