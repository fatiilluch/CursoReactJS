"use strict";

var array = ['one', 'two', 'three'];
var array2 = array.map(function (elem) {
  return elem + ' string';
});
var component = /*#__PURE__*/React.createElement("h1", null, " Test ");