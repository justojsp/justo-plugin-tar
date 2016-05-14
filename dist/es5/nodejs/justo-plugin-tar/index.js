"use strict";
var _justo = require("justo");


var NS = "org.justojs.plugins.tar";
var extract;


module.exports = { 
  get extract() {
    if (!extract) extract = (0, _justo.simple)({ ns: NS, name: "extract" }, require("./lib/extract").default);
    return extract;} };