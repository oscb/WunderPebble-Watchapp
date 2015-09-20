var Settings = require('settings');

var Configuration = module.exports;

Configuration.init = function(callback) {
  Settings.config(
    { url: 'http://wunderpebble.oscarbazaldua.com' },
    function(e) {
      console.log('// Opened Configuration Page');
    },
    function(e) {
      console.log('// Closed Configuration Page');
      console.log(JSON.stringify(e.options));
      Settings.option('token', e.options.token);

      if (e.failed) {
        console.log("Failed");
        console.log(e.response);
      }
      callback();
    }
  );   
};