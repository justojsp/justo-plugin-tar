//imports
const justo = require("justo");
const suite = justo.suite;
const test = justo.test;
const pkg = require("../../dist/es5/nodejs/justo-plugin-tar");

//suite
suite("API", function() {
  test("extract", function() {
    pkg.extract.must.be.instanceOf(Function);
  });
})();
