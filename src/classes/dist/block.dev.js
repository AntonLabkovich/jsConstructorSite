"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextColumn = exports.TextBlock = exports.ImageBlock = exports.TitleBlock = void 0;

var _untils = require("../untils");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Block =
/*#__PURE__*/
function () {
  function Block(value, options) {
    _classCallCheck(this, Block);

    this.value = value;
    this.options = options;
  }

  _createClass(Block, [{
    key: "toHTML",
    value: function toHTML() {
      throw new Error('Метод toHTML должн быть');
    }
  }]);

  return Block;
}();

var TitleBlock =
/*#__PURE__*/
function (_Block) {
  _inherits(TitleBlock, _Block);

  function TitleBlock(value, options) {
    _classCallCheck(this, TitleBlock);

    return _possibleConstructorReturn(this, _getPrototypeOf(TitleBlock).call(this, value, options));
  }

  _createClass(TitleBlock, [{
    key: "toHTML",
    value: function toHTML() {
      var _this$options = this.options,
          tag = _this$options.tag,
          styles = _this$options.styles;
      return (0, _untils.row)((0, _untils.col)("<".concat(tag, ">").concat(this.value, "</").concat(tag, ">")), styles);
    }
  }]);

  return TitleBlock;
}(Block);

exports.TitleBlock = TitleBlock;

var ImageBlock =
/*#__PURE__*/
function (_Block2) {
  _inherits(ImageBlock, _Block2);

  function ImageBlock(value, options) {
    _classCallCheck(this, ImageBlock);

    return _possibleConstructorReturn(this, _getPrototypeOf(ImageBlock).call(this, value, options));
  }

  _createClass(ImageBlock, [{
    key: "toHTML",
    value: function toHTML() {
      var _this$options2 = this.options,
          alt = _this$options2.alt,
          styles = _this$options2.styles,
          imageStyle = _this$options2.imageStyle;
      var html = "<img src=\"".concat(this.value, "\" alt=\"").concat(alt, "\" style=\"").concat(imageStyle, "\"/>");
      return (0, _untils.row)(html, styles);
    }
  }]);

  return ImageBlock;
}(Block);

exports.ImageBlock = ImageBlock;

var TextBlock =
/*#__PURE__*/
function (_Block3) {
  _inherits(TextBlock, _Block3);

  function TextBlock(value, options) {
    _classCallCheck(this, TextBlock);

    return _possibleConstructorReturn(this, _getPrototypeOf(TextBlock).call(this, value, options));
  }

  _createClass(TextBlock, [{
    key: "toHTML",
    value: function toHTML() {
      var styles = this.options.styles;
      return (0, _untils.row)((0, _untils.col)("<p style=\"margin-bottom:0\">".concat(this.value, "</p>")), styles);
    }
  }]);

  return TextBlock;
}(Block);

exports.TextBlock = TextBlock;

var TextColumn =
/*#__PURE__*/
function (_Block4) {
  _inherits(TextColumn, _Block4);

  function TextColumn(value, options) {
    _classCallCheck(this, TextColumn);

    return _possibleConstructorReturn(this, _getPrototypeOf(TextColumn).call(this, value, options));
  }

  _createClass(TextColumn, [{
    key: "toHTML",
    value: function toHTML() {
      var styles = this.options.styles;
      var html = this.value.map(function (item) {
        return (0, _untils.col)("".concat(item));
      });
      return (0, _untils.row)("".concat(html.join('')), styles);
    }
  }]);

  return TextColumn;
}(Block);

exports.TextColumn = TextColumn;