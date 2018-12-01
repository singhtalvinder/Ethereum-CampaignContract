'use strict';

// need a second set of (). This means  it returns a function. And with () in the
// end, it will execute this fn immeditely after require.
// Along with this we create a server.js that manually boots up and 
// tells it specifically to use routes.js 
var routes = require('next-routes')();

// Define new route mapping.
// The campaign will be different each time so it must be dynamic. 
// so we specify wildcard denote by a : followed by a variable.
routes.add('/campaigns/new', '/campaigns/new').add('/campaigns/:address', '/campaigns/show');

module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU0sU0FBUyxBQUFmOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQ0MsQUFERCxJQUNLLEFBREwsa0JBQ3VCLEFBRHZCLGtCQUVDLEFBRkQsSUFFSyxBQUZMLHVCQUU0QixBQUY1Qjs7QUFLQSxPQUFPLEFBQVAsVUFBZ0IsQUFBaEIiLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6IkM6L0V0aGVyZXVtLUJsb2NrY2hhaW4vU21hcnRDb250cmFjdHMva2lja3N0YXJ0In0=