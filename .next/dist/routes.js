'use strict';

// need a second set of (). This means  it returns a function. And with () in the
// end, it will execute this fn immeditely after require.
// Along with this we create a server.js that manually boots up and 
// tells it specifically to use routes.js 
var routes = require('next-routes')();

// Define new route mapping.
// The campaign will be different each time so it must be dynamic. 
// so we specify wildcard denote by a : followed by a variable.
routes.add('/campaigns/new', '/campaigns/new').add('/campaigns/:address', '/campaigns/show').add('/campaigns/:address/requests', '/campaigns/requests/index');

module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU0sU0FBUyxBQUFmOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQ0MsQUFERCxJQUNLLEFBREwsa0JBQ3VCLEFBRHZCLGtCQUVDLEFBRkQsSUFFSyxBQUZMLHVCQUU0QixBQUY1QixtQkFHQyxBQUhELElBR0ssQUFITCxnQ0FHcUMsQUFIckM7O0FBTUEsT0FBTyxBQUFQLFVBQWdCLEFBQWhCIiwiZmlsZSI6InJvdXRlcy5qcyIsInNvdXJjZVJvb3QiOiJDOi9FdGhlcmV1bS1CbG9ja2NoYWluL1NtYXJ0Q29udHJhY3RzL2tpY2tzdGFydCJ9