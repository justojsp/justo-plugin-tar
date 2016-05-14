//imports
import tar from "tar.gz";

/**
 * Task operation.
 */
export default function op(params, done) {
  var opts, extractor;

  //(1) arguments
  if (params.length >= 0) opts = params[0];
  if (!opts) opts = {};
  if (!opts.src) throw new Error("src expected.");
  if (!opts.dst) throw new Error("dst expected.");

  //(2) extract
  tar().extract(opts.src, opts.dst, done);
}
