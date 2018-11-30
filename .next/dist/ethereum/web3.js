'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Assumption: User has metamask installed and running so that
// we can get current provider.
//const web3 = new Web3(window.web3.currentProvider);
// But thats not the case. Even window as used above will not be
// accessible in server code.
// So: follow the approach below to handle 2-cases.

var web3 = void 0;
if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    // means its running in browser and metamask is running.
    web3 = new _web2.default(window.web3.currentProvider);
} else {
    // means its running on server. or user not running metamask.
    // Create own provider.
    var provider = new _web2.default.providers.HttpProvider('https://rinkeby.infura.io/v3/49b0ba1b330d4f7ea92dd55fcb233a32');

    web3 = new _web2.default(provider);
}
// Web3 -> constructor function.
// web3 -> instance.
exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFx3ZWIzLmpzIl0sIm5hbWVzIjpbIldlYjMiLCJ3ZWIzIiwid2luZG93IiwiY3VycmVudFByb3ZpZGVyIiwicHJvdmlkZXIiLCJwcm92aWRlcnMiLCJIdHRwUHJvdmlkZXIiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU8sQUFBUDs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUksWUFBSjtBQUNBLElBQUcsT0FBTyxBQUFQLFdBQWtCLEFBQWxCLGVBQWlDLE9BQU8sT0FBTyxBQUFkLFNBQXVCLEFBQTNELGFBQXdFLEFBQ3BFO0FBQ0E7V0FBTyxBQUFJLEFBQUosa0JBQVMsT0FBTyxBQUFQLEtBQVksQUFBckIsQUFBUCxBQUNIO0FBSEQsT0FJSyxBQUNEO0FBQ0E7QUFDQTtRQUFNLFdBQVcsSUFBSSxjQUFLLEFBQUwsVUFBZSxBQUFuQixhQUNiLEFBRGEsQUFBakIsQUFJQTs7V0FBTyxBQUFJLEFBQUosa0JBQVMsQUFBVCxBQUFQLEFBRUg7O0FBQ0Q7QUFDQSxBQUNBO2tCQUFlLEFBQWYiLCJmaWxlIjoid2ViMy5qcyIsInNvdXJjZVJvb3QiOiJDOi9FdGhlcmV1bS1CbG9ja2NoYWluL1NtYXJ0Q29udHJhY3RzL2tpY2tzdGFydCJ9