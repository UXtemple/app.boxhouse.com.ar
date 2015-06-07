#!/usr/bin/env babel-node

import koa from 'koa';
import sendfile from 'koa-sendfile';
import serve from 'koa-static';

let app = koa();
app.use(serve('./playground/web'));
app.use(catchAll);
app.listen(3000);

function *catchAll(next) {
  yield* sendfile.call(this, './playground/web/index.html');

  if (!this.status) {
    this.throw(404)
  };
}
