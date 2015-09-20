var UI = require('ui');
var Vector2 = require('vector2');
var List = require('model_list');
var TaskList = require('view_list_tasks');
var Splash = require('view_splash_loading');

var ListLists = module.exports;

ListLists.build = function() {
  this.menu = new UI.Menu({
    sections: [
      {
        items: [
          {
            title: 'WunderPebble',
            icon: 'images/wunderpebble_icon.png',
            subtitle: 'Loading Lists'
          }
        ]
      }
    ]
  });
  this.menu.on('select', this.selectItem);
};
  
ListLists.show = function() {
  if (!this.menu){
    this.build();
  }
  Splash.show();
  List.all(this.updateList, null);
};

ListLists.updateList = function(data) {
  ListLists.menu.hide();
  console.log(data);
  console.log('# Updating list #');
  var items = [];
  var i, len;
  for (i = 0, len = data.length; i < len; ++i) {
    items.push({
      title: data[i].title,
      icon: 'images/list.png',
    });
  }
  var section = {
    title: 'Lists',
    items: items
  };
  ListLists.menu.section(0, section);
  ListLists.menu.show();
  Splash.hide();
};

ListLists.selectItem = function(e) {
  var selected_list = List.getObjbyIndex(e.itemIndex);
  TaskList.show(selected_list.id);
};