"use strict";

var _model = require("./model");

var _site = require("./classes/site");

require("./styles/main.css");

var site = new _site.Site('#site');
site.render(_model.model);