var UI = require('ui');
var Task = require('model_task');
var Vibe = require('ui/vibe');
var Splash = require('view_splash_loading');

var ListTasks = module.exports;

ListTasks.build = function() {
  this.menu = new UI.Menu({
    sections: [
      {
        title: 'To Do',
        items: [
          {
            title: 'WunderPebble',
            icon: 'images/wunderpebble_logo.png',
            subtitle: 'Loading Tasks'
          }
        ]
      },
      {
        title: 'Completed',
        items: [
          {
            title: 'Load Completed',
            icon: 'images/wunderpebble_logo.png',
            subtitle: 'Load All Completed Tasks'
          }
        ]
      }
    ]
  });
  
  // Select
  this.menu.on('select', this.selectItem);
  // Long Select
  this.menu.on('longSelect', this.longSelectItem);
};
  
ListTasks.show = function(list_ID) {
  if (!this.menu){
    this.build();
  }
  Splash.show();
  this.list_ID = list_ID;
  Task.all(list_ID, this.updateList, null);
//   this.menu.show();
};

ListTasks.updateList = function(data) {
  ListTasks.menu.hide();
  console.log(data);
  console.log('# Updating tasks #');
  ListTasks.menu.items(0, data);
  ListTasks.menu.show();
  Splash.hide();
};

ListTasks.selectItem = function(e) {
  if (e.sectionIndex === 0) {
    // TODO: Load Details
  } else {
    // TODO: Load Completed Tasks
  }
};

ListTasks.longSelectItem = function(e) {
  if (e.sectionIndex === 0) {
    console.log(e.item._id);
    // Mark as Complete
    var item = e.item.complete();
    Vibe.vibrate('short');
    ListTasks.menu.item(e.sectionIndex, e.itemIndex, item);
  } else {
    ListTasks.selectItem(e);
  }
};
