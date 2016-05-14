//imports
import {simple} from "justo";

//internal data
const NS = "org.justojs.plugins.tar";
var extract;

//api
module.exports = {
  get extract() {
    if (!extract) extract = simple({ns: NS, name: "extract"}, require("./lib/extract").default);
    return extract;
  }
};
