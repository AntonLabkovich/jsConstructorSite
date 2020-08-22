"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = void 0;

var _untils = require("./untils");

function title(block) {
  var _block$options = block.options,
      tag = _block$options.tag,
      styles = _block$options.styles;
  return (0, _untils.row)((0, _untils.col)("<".concat(tag, ">").concat(block.value, "</").concat(tag, ">")), styles);
}

function text(block) {
  var styles = block.options.styles;
  return (0, _untils.row)((0, _untils.col)("<p style=\"margin-bottom:0\">".concat(block.value, "</p>")), styles);
}

function textColumn(block) {
  var styles = block.options.styles;
  var html = block.value.map(function (item) {
    return (0, _untils.col)("".concat(item));
  });
  return (0, _untils.row)("".concat(html.join('')), styles);
}

function image(block) {
  var _block$options2 = block.options,
      alt = _block$options2.alt,
      styles = _block$options2.styles,
      imageStyle = _block$options2.imageStyle;
  var html = "<img src=\"".concat(block.value, "\" alt=\"").concat(alt, "\" style=\"").concat(imageStyle, "\"/>");
  return (0, _untils.row)(html, styles);
}

var templates = {
  title: title,
  text: text,
  textColumn: textColumn,
  image: image
};
exports.templates = templates;