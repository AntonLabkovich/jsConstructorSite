"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.model = void 0;

var _logo = _interopRequireDefault(require("./assets/logo.jpg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var model = [{
  type: 'title',
  value: 'Test Title',
  options: {
    tag: 'h2',
    styles: 'background: darkred; color pink;'
  }
}, {
  type: 'image',
  value: _logo["default"],
  options: {
    styles: 'padding: 2rem 0; display:flex; justify-content:center',
    alt: 'my img',
    imageStyles: 'width:500px; height: auto;'
  }
}, {
  type: 'text',
  value: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  options: {
    styles: 'background: darkblue; color yellow;'
  }
}, {
  type: 'textColumn',
  value: ['1 text', '2 text', '3 text'],
  options: {
    styles: 'padding: 1rem'
  }
}];
exports.model = model;