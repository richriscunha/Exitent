# Exitent (Still a Work in Progress)

Exitent is a light-weight, dependency free Exit Intent detection library.  Use Exitent to detect if someone is leaving your sight and will fire several events.

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
  'threshold': 100,
  'maxDisplays': 1,
  'eventThrottle': 800,
  'checkReferrer': true,
  'preExitent': null,
  'onExitent': null,
  'postExitent': null
}
```

-   `threshold` description goes here.
-   `maxDisplays` description goes here.
-   `eventThrottle` description goes here.
-   `checkReferrer` description goes here.
-   `preExitent` description goes here.
-   `onExitent` description goes here.
-   `postExitent` description goes here.

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
