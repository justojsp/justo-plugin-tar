"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = 





op;var _tar = require("tar.gz");var _tar2 = _interopRequireDefault(_tar);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function op(params, done) {
  var opts, extractor;


  if (params.length >= 0) opts = params[0];
  if (!opts) opts = {};
  if (!opts.src) throw new Error("src expected.");
  if (!opts.dst) throw new Error("dst expected.");


  (0, _tar2.default)().extract(opts.src, opts.dst, done);}