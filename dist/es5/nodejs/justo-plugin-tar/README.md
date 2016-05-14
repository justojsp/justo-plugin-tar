[![NPM version](http://img.shields.io/npm/v/justo-plugin-tar.svg)](https://www.npmjs.org/package/justo-plugin-tar)
[![Build Status](https://travis-ci.org/justojsp/justo-plugin-tar.svg?branch=master)](https://travis-ci.org/justojsp/justo-plugin-tar)
[![Dependency Status](https://david-dm.org/justojsp/justo-plugin-tar.svg)](https://david-dm.org/justojsp/justo-plugin-tar)
[![devDependency Status](https://david-dm.org/justojsp/justo-plugin-tar/dev-status.svg)](https://david-dm.org/justojsp/justo-plugin-tar#info=devDependencies)

Plugin to tar.

*Proudly made with ♥ in Valencia, Spain, EU.*

## Install

```
npm install justo-plugin-tar
```

## Use

This plugin is composite.

### extract task

```
extract(justoOpts, opts : object)
```

The `opts` parameter:

- `src` (string). File to extract.
- `dst` (string). Directory where to extract.

Example:

```
const tar = require("justo-plugin-tar");

tar.extract("Extract redis-stable.tar.gz", {
  src: "downloads/redis-stable.tar.gz",
  dst: TMP_DIR
});
```
