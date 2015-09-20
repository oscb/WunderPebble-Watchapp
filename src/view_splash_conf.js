var UI = require('ui');
var Vector2 = require('vector2');

var SplashConf = module.exports;

SplashConf.build = function() {
    this.window = new UI.Window();
    this.textfield = new UI.Text({
      position: new Vector2(0, 50),
      size: new Vector2(144, 30),
      font: 'gothic-24-bold',
      text: 'Login to Start',
      textAlign: 'center'
    });
    this.window.add(this.textfield);
  };
  
SplashConf.show = function() {
    if (!this.window){
      this.build();
    }
    this.window.show();
  };

SplashConf.hide = function() {
  if (this.window) {
    this.window.hide();
  }
};