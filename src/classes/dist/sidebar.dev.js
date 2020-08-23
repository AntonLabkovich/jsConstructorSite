"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Sidebar = void 0;

var _block = require("./block");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Sidebar =
/*#__PURE__*/
function () {
  function Sidebar(selector, update) {
    _classCallCheck(this, Sidebar);

    this.$el = document.querySelector(selector);
    this.update = update;
    this.init();
  }

  _createClass(Sidebar, [{
    key: "init",
    value: function init() {
      this.$el.addEventListener('submit', this.addBlock.bind(this));
      this.$el.innerHTML = this.template;
    }
  }, {
    key: "addBlock",
    value: function addBlock(e) {
      e.preventDefault();
      var type = e.target.name;
      var value = e.target.value.value;
      var styles = e.target.styles.value;
      var Constructor = type === 'text' ? _block.TextBlock : _block.TitleBlock;
      var newBlock = new Constructor(value, {
        styles: styles
      });
      this.update(newBlock);
      e.target.value.value = '';
      e.target.styles.value = '';
    }
  }, {
    key: "template",
    get: function get() {
      return [block('text'), block('title')].join('');
    }
  }]);

  return Sidebar;
}();

exports.Sidebar = Sidebar;

function block(type) {
  return "\n        <form name=\"".concat(type, "\">\n            <h5>").concat(type, "</h5>\n            <div class = 'form-group'>\n                <input class=\"form-control form-control-sm\" name=\"value\" placeholder=\"value\">\n            </div>\n            <div class = 'form-group'>\n                <input class=\"form-control form-control-sm\" name=\"styles\" placeholder=\"styles\">\n            </div>\n            <button type=\"submit\" class=\"btn btn-primary btn-sm\">Create</button>\n        </form>\n    ");
}