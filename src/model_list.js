var API = require('API');
var Settings = require('settings');

var List = module.exports;

var _key = 'LISTS';
var _endpoint = 'lists';

List.all = function(success_callback, error_callback) {
  var key = _key;
  API.get(_endpoint, null, success_callback, error_callback, key);
};

List.get = function(id, success_callback, error_callback) {
  var key = _key + '_' + id;
  API.get(_endpoint, null, success_callback, error_callback, key);
};

List.getObjbyIndex = function(index) {
  var lists = Settings.data(_key);
  return lists[index];
};