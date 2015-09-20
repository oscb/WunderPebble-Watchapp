/**
 * WunderPebble
 * by: Oscb
 */

var Configuration = require('configuration');
var Settings = require('settings');

// Views
var Splash = require('view_splash_loading');
var SplashConf = require('view_splash_conf');
var ListLists = require('view_list_lists');

// Start
var load = function reload() {
  console.log('# Loading #');
  if (Settings.option('token')) {
    SplashConf.hide();
    ListLists.show();
  } else {
    Splash.hide();
    SplashConf.show();
  } 
};

Splash.show();
Configuration.init(load);
load();
