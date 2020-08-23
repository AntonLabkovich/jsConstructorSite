"use strict";

var _model = require("./model");

var _site = require("./classes/site");

require("./styles/main.css");

var _sidebar = require("./classes/sidebar");

var site = new _site.Site('#site');

var updateCallback = function updateCallback(newBlock) {
  _model.model.push(newBlock);

  site.render(_model.model);
};

new _sidebar.Sidebar('#panel', updateCallback);
site.render(_model.model);