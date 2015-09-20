var UI = require('ui');
var Vector2 = require('vector2');

var SplashLoading = module.exports;

SplashLoading.build = function() {
  this.window = new UI.Window();
  this.textfield = new UI.Text({
    position: new Vector2(0, 50),
    size: new Vector2(144, 30),
    font: 'gothic-24-bold',
    text: 'Loading',
    textAlign: 'center'
  });
  this.image = new UI.Image({
    position: new Vector2(38, 20),
    size: new Vector2(67, 73),
    image: 'images/loading.png'
  });
  this.window.add(this.textfield);
  this.window.add(this.image);
};
  
SplashLoading.show = function() {
  if (!this.window){
    this.build();
  }
  this.window.show();
};

SplashLoading.hide = function() {
  if (this.window) {
    this.window.hide();
  }
};