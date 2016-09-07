import {defaultConfiguration} from './configuration/default';
import StorageJar from 'storage-jar';
import throttle from 'lodash/throttle';
import merge from 'lodash/merge';

/**
 * Exitent is a light-weight Exit Intent detection library.  Use Exitent to
 * detect if someone is leaving your sight and will fire several events.
 * @class
 */
export default class Exitent {
  /**
   * Initialise your Exit Intent detection with specified user options.
   * @param {object} options - a configuration option defining the settings for exit detection.
   * @constructs
   * @example
   * var e = new Exitent({
   *   'threshold': 10,
   *   'maxDisplays': 3,
   *   'checkReferrer': false,
   *   'onExitent': function() {
   *     console.log('Exit Intent Detected')
   *   }
   * });
   */
  constructor(options) {
    this.eventListeners = new Map();
    this.displays = 0;
    this.options = defaultConfiguration;
    if (arguments.length === 1 && typeof options === 'object') {
      this.options = this.mergeOptions(defaultConfiguration, options);
    }
    this.init();
  }
  /**
   * Attaches a callback function to a specified event for a defined element.
   * @param {string} elementId - ID of the DOM Element.
   * @param {string} eventName - type of event you wish to listen for.
   * @param {function} callback - function that receives data triggered from event being fired.
   * @function
   * @name addEvent
   * @private
   */
  addEvent(elementId, eventName, callback) {
    const element = elementId === 'document' ? document : document.getElementById(elementId);
    if (element.addEvent) {
      element.attachEvent("on" + eventName, callback);
    } else {
      element.addEventListener(eventName, callback, false);
    }
    this.eventListeners.set(elementId + ":" + eventName, {
      element,
      eventName,
      callback
    });
  }
  /**
   * This function will trigger all the events for Exit Intent detection.
   * @function
   * @name executeCallbacks
   * @private
   */
  executeCallbacks() {
    const {preExitent, onExitent, postExitent} = this.options;
    if (preExitent !== null && typeof preExitent === 'function') preExitent();
    if (onExitent !== null && typeof onExitent === 'function') onExitent();
    if (postExitent !== null && typeof postExitent === 'function') postExitent();
  }
  /**
   * This function will execute when the library has determined Exit Intent.
   * @function
   * @name handleMouseEvent
   * @private
   */
  handleMouseEvent() {
    this.executeCallbacks();
    this.shouldRemoveEvents();
  }
  /**
   * This function will initialise the class and register the event handler for mousemove.
   * @function
   * @name handleCallback
   * @private
   */
  init() {
    const handleCallback = (event) => { this.mouseDidMove(event); }
    this.addEvent('document', 'mousemove', throttle(handleCallback, this.options.eventThrottle));
  }
  /**
   * This function will take the provided options and merge with the default options.
   * @param {object} options - default configuration options.
   * @param {object} custom - user provided options to merge with default options.
   * @returns {object} options - object containing the merged options.
   * @function
   * @name mergeOptions
   * @private
   */
  mergeOptions(options, custom) {
    return merge(options, custom);
  }
  /**
   * Handles each mousemove event and determines if the Exit Intent should be triggered.
   * @param {event} event - mousemove event triggered from document.
   * @function
   * @name mouseDidMove
   * @private
   */
  mouseDidMove(event) {
    const {maxDisplays, storageName, storageLife, checkReferrer} = this.options;
    if (this.shouldDisplay(event.clientY)) {
      if (checkReferrer) {
        let link = document.createElement('a');
        link.href = document.referrer;

        if (document.referrer === "" || (link.host !== document.location.host))
          return;
      }

      if (this.displays === maxDisplays && (! StorageJar.contains(storageName)))
        StorageJar.write(storageName, storageName, storageLife);

      this.handleMouseEvent();
    }
  }
  /**
   * Removes specific Event Listener from the group of defined listeners.
   * @param {string} key - id/key of the stored event listener.
   * @function
   * @name removeEvent
   * @private
   */
  removeEvent(key) {
    const item = this.eventListeners.get(key);
    const {element, eventName, callback} = item;
    element.removeEventListener(eventName, callback);
    this.eventListeners.delete(key);
  }
  /**
   * Determines if the Exit Intent should be triggered based on defined options.
   * @param {number} position - position of the cursor from the top of the document.
   * @returns {boolean}.
   * @function
   * @name shouldDisplay
   * @private
   */
  shouldDisplay(position) {
    const {threshold, maxDisplays, storageName} = this.options;
    if (position <= threshold && this.displays < maxDisplays) {
      if (! StorageJar.contains(storageName)) {
        this.displays++;
        return true;
      }
    }
    return false;
  }
  /**
   * Determines if Event Listeners should be removed and removes them.
   * @function
   * @name shouldRemoveEvents
   * @private
   */
  shouldRemoveEvents() {
    if (this.displays >= this.options.maxDisplays) {
      this.eventListeners.forEach((value, key, map) => {
        this.removeEvent(key);
      });
    }
  }
}
