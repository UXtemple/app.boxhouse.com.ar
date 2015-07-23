export default function render({app, data, title}) {
  return `<!DOCTYPE html>
<html lang=en>
  <head>
    <meta charset=utf-8 />
    <meta content='width=device-width, initial-scale=1.0' name=viewport />
    <base href=/ />
    <meta content=! name=fragment />
    <title>${title}</title>
    <link href=favicon.ico rel=icon type=image/x-icon />
    <link href=//fonts.googleapis.com/css?family=Roboto:100,300,400&amp;subset=latin,latin-ext rel=stylesheet />
    <style>body{font-family:Roboto,sans-serif;font-weight:100;margin:0;}a,div,img,input,h1,h2,p,span{box-sizing:border-box;position:relative;display:flex;flex-direction:column;align-items:stretch;flex-shrink: 0;border:0 solid black;margin:0;padding:0;}</style>
    <link href=playground.css rel=stylesheet />
  </head>
  <body>
    <div id=app>${app}</div>
    <script src=/app.js></script>
    <script>window.appData=${data};</script>
  </body>
</html>`;
}
