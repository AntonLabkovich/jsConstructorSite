"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.row = row;
exports.col = col;

function row(content) {
  var styles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return "<div class=\"row\" style=\"margin:0; ".concat(styles, "\">").concat(content, "</div>");
}

function col(content) {
  var styles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return "<div class='col-sm' style=".concat(styles, ">").concat(content, "</div>");
}