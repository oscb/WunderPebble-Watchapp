var API = require('API');
var Settings = require('settings');

var Tasks = module.exports;

var _key = 'TASKS';
var _endpoint = 'tasks';

// Task Object
var markAsComplete = function() {
  this._completed = !this._completed;
  this.icon = (this._completed) ? 'images/task_complete.png' : 'images/task.png';
  // TODO: Send Data to Web Service
  return this;
};

var Task = function(data) {
  this._id = data.id;
  this._completed = data.completed;
  // Display Data
  this.title = data.title;
  this.icon = (data.completed) ? 'images/task_complete.png' : 'images/task.png';
  this.subtitle = data.due_date;
  this.body = "Lorem ipsum dolor amet";
  // Functions
  this.complete = markAsComplete;
  // TODO: Add functions to load details, subtasks and reminders
};

// Task Builder
var tasksBuild = function tasks_build(data) {
  if (data.constructor === Array) {
    var items = [];
    var i, len;
    for (i = 0, len = data.length; i < len; ++i) {
      items.push(new Task(data[i]));
    }  
    return items;
  } else {
    return new Task(data);
  }
};

var buildPreCallback = function pre_callback(callback) {
  return function(data) {
    var t = tasksBuild(data);
    callback(t); 
  };
};

// Tasks API
Tasks.all = function(list_ID, success_callback, error_callback) {
  var key = _key + '_LIST_' + list_ID;
  API.get(_endpoint, {list_id: list_ID}, buildPreCallback(success_callback), error_callback, key);
  
};

Tasks.completed = function(list_ID, success_callback, error_callback) {
  var key = _key + '_LIST_COMPLETED_' + list_ID;
  API.get(_endpoint, {list_id: list_ID, completed: true}, buildPreCallback(success_callback), error_callback, key);
};

Tasks.get = function(id, success_callback, error_callback) {
  var key = _key + '_' + id;
  API.get(_endpoint, null, buildPreCallback(success_callback), error_callback, key);
};