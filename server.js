
const path = require('path');
const express = require('express');
const mockjs = require('mockjs')
const fs = require('fs');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const ROOT_PATH = path.resolve(__dirname, './');
const bodyParser = require("body-parser");

const app = express();
const config = require('./build/webpack.config.js');
var _host = process.argv[4] || 'localhost'

console.log('process',process.argv)
const compiler = webpack(config);


function bindWebpack() {
    compiler.apply(new webpack.ProgressPlugin)
    app.use(webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath
    }));
    app.use(webpackHotMiddleware(compiler, {
        path: './__webpack_hmr'
    }));
}
function bindProxy() {
    if (!_host) {
        throw new Error("请输入代理名称")
    }
    if(_host === 'localhost') {
        app.all(/\/\w+/, (req, res)=> {
            let mock = {}
            let fileName = path.join(__dirname, "./mock");
            console.log('req.url',req.url)
            fileName += req.url.replace(/([\w|\-|\/]*)(\??.*$)/, '$1') + '.json'
            fs.readFile(fileName, 'utf8', (err, data) => {
                if (!err) {
                    res.send(mockjs.mock(JSON.parse(data)));
                } else {
                    res.sendStatus(404);
                }
            });
        })
    }
    
}
function startServer() {
    const port = 8112;
    app.listen(port, () => {
        console.log("\napp listening on port %s ！open http://localhost: %s \n", port, port);
    });
}


function onError(e) {
    console.error(e.stack ? e.stack : e);
    process.exit();
}

function start() {
    new Promise(((resolve)=> {
        resolve();
    }))
    .then(bindWebpack)
    .then(bindProxy)
    .then(startServer)
    .catch(onError)
}



start()