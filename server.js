// server.js is created along with routes.js.
// This server.js manually boots up and tells it specifically
// to use routes.js 
// This also requires to modify the package.json and there
// change the "dev" : value to "dev": "node server.js"
const {createServer} = require('http');
const next = require('next');

const app = next({
    dev: process.env.NODE_ENV !== 'production'
});

const routes = require('./routes');
const handler = routes.getRequestHandler(app);

app.prepare().then(() => {
    createServer(handler).listen(3000,(err) => {
        if(err) throw err;

        console.log('Live and listening at locahost:3000');
    });
});