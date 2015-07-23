import * as DUMMY_DATA from '../playground/dummy-data';
import { createPanelsRuntime } from 'panels-runtime';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import render from './render';

const CONTENT_TYPE = 'text/html';
const GET = 'GET';

export default function *(next) {
  if (this.method === GET && this.accepts(CONTENT_TYPE)) {
    this.type = CONTENT_TYPE;

    try {
      const instance = createPanelsRuntime(DUMMY_DATA, this.href);

      this.body = render({
        app: ReactDOMServer.renderToString(<instance.App />),
        data: JSON.stringify(instance.redux.getState())
      });
    } catch(err) {
      yield next;
    }
  } else {
    yield next;
  }
}
