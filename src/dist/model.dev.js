"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.model = void 0;

var _logo = _interopRequireDefault(require("./assets/logo.jpg"));

var _block = require("./classes/block");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var model = [new _block.TitleBlock('Test Title', {
  tag: 'h2',
  styles: 'background: darkred; color pink;'
}), new _block.ImageBlock(_logo["default"], {
  styles: 'padding: 2rem 0; display:flex; justify-content:center',
  alt: 'my img',
  imageStyles: 'width:500px; height: auto;'
}), new _block.TextBlock('It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.', {
  styles: 'background: darkblue; color yellow;'
}), new _block.TextColumn(['1 text', '2 text', '3 text'], {
  styles: 'padding: 1rem'
})];
exports.model = model;