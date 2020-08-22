"use strict";

var _model = require("./model");

require("./styles/main.css");

var site = document.querySelector('#site');

_model.model.forEach(function (block) {
  console.log(block);
  site.insertAdjacentHTML('beforeend', block.toHTML()); // const generate = templates[block.type]
  // if(generate){
  //     const html = generate(block)
  //    
  // }
});