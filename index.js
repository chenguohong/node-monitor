'use strict';
const nodeMonitor = require('./dispatch');
nodeMonitor({
    dashboard: {
     port_http: 20000,
     port_tcp: 30000
     },
	 auth: {
        need: true, // 需要鉴权
        /**
         @param {string} user 用户名
         @param {string} pass 用户键入密码
         @return {promise}
         **/
        authentication(user, pass) {
            return new Promise(resolve => {
                if ((user === 'admin' && pass === 'admin123')) resolve(true)
                else resolve(false);
            });
        }
    }
})
