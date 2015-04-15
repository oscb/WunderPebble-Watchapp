// Open WunderPebble Login Site
Pebble.addEventListener('showConfiguration', function(e) {
  Pebble.openURL('http://wunderpebble.oscarbazaldua.com/');
});

// Close and get the Token
Pebble.addEventListener('webviewclosed',
  function(e) {
    var configuration = JSON.parse(decodeURIComponent(e.response));
    console.log('Configuration window returned: ', JSON.stringify(configuration));
  }
);

