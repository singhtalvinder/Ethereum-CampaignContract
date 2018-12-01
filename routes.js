// need a second set of (). This means  it returns a function. And with () in the
// end, it will execute this fn immeditely after require.
// Along with this we create a server.js that manually boots up and 
// tells it specifically to use routes.js 
const routes = require('next-routes')();




module.exports= routes;
