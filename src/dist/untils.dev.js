"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.row = row;
exports.col = col;
exports.css = css;

function row(content) {
  var styles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return "<div class=\"row\" style=\"margin:0; ".concat(styles, "\">").concat(content, "</div>");
}

function col(content) {
  var styles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return "<div class='col-sm' style=".concat(styles, ">").concat(content, "</div>");
}

function css() {
  var styles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var toString = function toString(key) {
    return "".concat(key, "; ").concat(styles[key]);
  };

  Object.keys(styles).map(toString).join(';');
}