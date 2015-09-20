var Ajax = require('ajax');
var Settings = require('settings');

var API = module.exports;

var _url = 'https://a.wunderlist.com/api/v1/';
var _clientID = 'f35941549d45fc03686d';

function EncodeGetparameters(url, params) {
  var urlParams = [];
  for (var x in params) {
    urlParams.push(encodeURIComponent(x) + "=" + encodeURIComponent(params[x]));
  }
  return url + '?' + urlParams.join("&");
}

API.token = function API_Token() {
  return Settings.option('token');
};

API.get = function API_Get(endpoint, data, success_callback, error_callback, key) {
  if (key && 
      Settings.data(key) && 
      Settings.data(key).expire && 
      Settings.data(key).expire > new Date().getTime() ) {
    
    var result = Settings.data(key);
    success_callback(result);
    return;
  }
  
  var url = _url + endpoint;
  if (data) {
    url = EncodeGetparameters(url, data);
  }
  console.log(url);
  
  Ajax(
    {
      url     : url,
      method  : 'get',
      type    : 'json',
      headers : {
        'X-Access-Token' : API.token(),
        'X-Client-ID'    : _clientID
      } 
    },
    function(result, status, request) {
      console.log(request);
      console.log('Result: ' + JSON.stringify(result));
      if (key) {
        result.expire = new Date(new Date().getTime() + /*24 * 60 * 60 * */ 1000);
        Settings.data(key, result);
      }
      success_callback(result);
    },
    function(error, status, request) {
      console.log(request);
      // TODO: Load from data if possible
      console.log('Failure: ' + error);
      error_callback();
    }
  );
};