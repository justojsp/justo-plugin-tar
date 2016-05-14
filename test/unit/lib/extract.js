//imports
const assert = require("assert");
const path = require("path");
const Dir = require("justo-fs").Dir;
const file = require("justo-assert-fs").file;
const justo = require("justo");
const suite = justo.suite;
const test = justo.test;
const init = justo.init;
const fin = justo.fin;
const op = require("../../../dist/es5/nodejs/justo-plugin-tar/lib/extract").default;

//suite
suite("#op()", function() {
  const DATA = "test/unit/data";
  var DST, DST_DIR;

  test("extract({})", function() {
    op.must.raise("src expected.", [[]]);
  });

  test("extract({src})", function() {
    op.must.raise("dst expected.", [[{src: "test.tar.gz"}]]);
  });

  init({name: "extract({src, dst})", title: "Create tmp dir"}, function() {
    DST_DIR = Dir.createTmpDir();
    DST = DST_DIR.path;
  });

  fin({name: "extract({src, dst})", title: "Remove tmp dir"}, function() {
    DST_DIR.remove();
  });

  test("extract({src, dst})", function(done) {
    assert(op([{
      src: path.join(DATA, "redis-stable.tar.gz"),
      dst: DST
    }], function(err) {
      if (err) return done(err);
      file(DST, "redis-stable/INSTALL").must.exist();
      file(DST, "redis-stable/sentinel.conf").must.exist();
      file(DST, "redis-stable/deps/update-jemalloc.sh").must.exist();
      done();
    }) === undefined);
  });
})();
