let util = {};
util.title = function (title) {
    title = title ? title + ' - Home' : 'Node-Monitor';
    window.document.title = title;
};

export default util;