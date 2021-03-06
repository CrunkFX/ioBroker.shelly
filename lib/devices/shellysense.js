/* jshint -W097 */
/* jshint -W030 */
/* jshint strict:true */
/* jslint node: true */
/* jslint esversion: 6 */
'use strict';

const shellyHelper = require('../shelly-helper');

/**
 * Shelly Sense / SHSEN-1 / shellysense
 * CoAP:
 *  {"blk":[{"I":1,"D":"sensors"}],"sen":[{"I":11,"D":"motion","T":"S","R":"0/1","L":1},{"I":22,"D":"charger","T":"S","R":"0/1","L":1},{"I":33,"D":"temperature","T":"T","R":"-40/125","L":1},{"I":44,"D":"humidity","T":"H","R":"0/100","L":1},{"I":66,"D":"lux","T":"L","R":"0/1","L":1},{"I":77,"D":"battery","T":"H","R":"0/100","L":1}]}
 */
let shellysense = {
  'sensor.battery': {
    coap: {
      coap_publish: '77'
    },
    mqtt: {
      mqtt_publish: 'shellies/shellysense-<deviceid>/sensor/battery',
    },
    common: {
      'name': 'Battery capacity',
      'type': 'number',
      'role': 'value.battery',
      'read': true,
      'write': false,
      'min': 0,
      'max': 100,
      'unit': '%'
    }
  },
  'sensor.humidity': {
    coap: {
      coap_publish: '44'
    },
    mqtt: {
      mqtt_publish: 'shellies/shellysense-<deviceid>/sensor/humidity',
    },
    common: {
      'name': 'Relative humidity',
      'type': 'number',
      'role': 'value.humidity',
      'read': true,
      'write': false,
      'min': 0,
      'max': 100,
      'unit': '%'
    }
  },
  'sensor.temperature': {
    coap: {
      coap_publish: '33'
    },
    mqtt: {
      mqtt_publish: 'shellies/shellysense-<deviceid>/sensor/temperature',
    },
    common: {
      'name': 'Temperature',
      'type': 'number',
      'role': 'value.temperature',
      'read': true,
      'write': false,
      'min': -100,
      'max': 100
    }
  },
  'sensor.motion': {
    coap: {
      coap_publish: '11',
      coap_publish_funct: (value) => { return value === 1 ? true : false; }
    },
    mqtt: {
      mqtt_publish: 'shellies/shellysense-<deviceid>/sensor/motion',
    },
    common: {
      'name': 'Motion',
      'type': 'boolean',
      'role': 'sensor.motion',
      'read': true,
      'write': false
    }
  },
  'sensor.charger': {
    coap: {
      coap_publish: '22',
      coap_publish_funct: (value) => { return value === 1 ? true : false; }
    },
    mqtt: {
      mqtt_publish: 'shellies/shellysense-<deviceid>/sensor/charger',
    },
    common: {
      'name': 'External Power',
      'type': 'boolean',
      'role': 'state',
      'read': true,
      'write': false
    }
  },
  'sensor.lux': {
    coap: {
      coap_publish: '66',
    },
    mqtt: {
      mqtt_publish: 'shellies/shellysense-<deviceid>/sensor/lux',
    },
    common: {
      'name': 'Illuminance',
      'type': 'number',
      'role': 'value.brightness',
      'read': true,
      'write': false,
      'unit': 'Lux'
    }
  }
};

module.exports = {
  shellysense: shellysense
};
