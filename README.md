# ptibbetts/fabricator

This is my fork of [Luke Askew](https://github.com/LukeAskew)'s [Fabricator](http://fbrctr.github.io)
which is currently at [v1.2.3](https://github.com/fbrctr/fabricator/releases/tag/v1.2.3).

It's kept in sync with the following exceptions:

- Materials renamed to `components`, `objects` and `elements` [view change](https://github.com/ptibbetts/fabricator/commit/4a659cd4d24c3085c396e4ea62c2525c209cdd94)
- Adds my own starter CSS, including [Normalize.css](https://necolas.github.io/normalize.css/) [view](https://github.com/ptibbetts/fabricator/tree/0e292afe0fb2d5f1fc813f2f70ea7947658300e9/src/assets/toolkit/styles)
- Replaces `{{baseurl}}` calls for script/style in default layout so repo can be hosted
on GitHub pages - [more info](https://github.com/ptibbetts/styles.paultibbetts.uk/issues/1) [view change](https://github.com/ptibbetts/fabricator/commit/d8e227eb58a3a9b76c755ee4e1b7b81a9c084dde)
- Replaces default "home" page with empty "index" page [view change](https://github.com/ptibbetts/fabricator/commit/afd3a4a8bd9300823d6bc47e37928400c77468ab)
- Fixes spelling of the word colours [we invented English](https://github.com/ptibbetts/fabricator/commit/988fd04e5048b535f6426b3c309f23e63d5fee68)

## Quick Start

```shell
$ curl -L https://github.com/ptibbetts/fabricator/archive/master.tar.gz | tar zx --strip 1
$ npm start
```

## Documentation

#### [Read the docs for Fabricator →](http://fbrctr.github.io/docs)

## Versioning

This repository will begin as one minor release ahead of the original Fabricator to
accommodate for the changes made. Future version increments will also be reflected
here; i.e. if Fabricator updates from v1.2.3 to v1.2.4 this repo will change from v1.3.0 to
v1.4.0 and when Fabricator turns v2.0.0 this repo will become (at least) v2.1.0.

Any significant additions/modifications to this fork will warrant their own version
changes and so the versions between the original and this fork may get out of sync.
