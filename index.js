'use strict';
const nodeMonitor = require('./dispatch');
nodeMonitor({
    dashboard: {
     port_http: 20000,
     port_tcp: 30000
     }
})