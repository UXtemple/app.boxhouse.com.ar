import compress from 'koa-compress';
// import context from './context';
import html from './html';
import htmlMinifier from 'koa-html-minifier';
import koa from 'koa';
// import panel from './panel';
// import type from './type';

const PORT = process.env.PORT || 3000;

let app = koa();

app.use(compress());
// app.use(context);
// app.use(panel);
// app.use(type);
app.use(htmlMinifier({collapseWhitespace: true}));
app.use(html);

app.listen(PORT);
console.log(`panels-server listening on port ${PORT}`);

// ui -> types
// store -> panels
// (context)
// ---------------
// panels-app
//  -> fetching new panels: json, types, context
// <- client side
//
// -> server side
// boxhouse.com/ +json -> panel '/' for boxhouse.com as json
//
// panel
//   action: '1'
//   action: '2'
//
// box.panel:
//  box detail: id
//
//  uxtemple.boxhouse.com/1
//
//  boxhouse.com -> file boxhouse.com/panel.json
//  boxhouse.com/:boxId -> file boxhouse.com/box/panel.json :boxId 1
