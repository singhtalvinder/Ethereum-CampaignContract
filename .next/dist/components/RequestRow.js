'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _campaign = require('../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Ethereum-Blockchain\\SmartContracts\\kickstart\\components\\RequestRow.js';


var RequestRow = function (_Component) {
    (0, _inherits3.default)(RequestRow, _Component);

    function RequestRow() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, RequestRow);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestRow.__proto__ || (0, _getPrototypeOf2.default)(RequestRow)).call.apply(_ref, [this].concat(args))), _this), _this.onApprove = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
            var campaign, accounts;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            campaign = (0, _campaign2.default)(_this.props.address);
                            _context.next = 3;
                            return _web2.default.eth.getAccounts();

                        case 3:
                            accounts = _context.sent;
                            _context.next = 6;
                            return campaign.methods.approveRequest(_this.props.id).send({
                                from: accounts[0]
                            });

                        case 6:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, _this2);
        })), _this.onFinalize = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
            var campaign, accounts;
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            campaign = (0, _campaign2.default)(_this.props.address);
                            _context2.next = 3;
                            return _web2.default.eth.getAccounts();

                        case 3:
                            accounts = _context2.sent;
                            _context2.next = 6;
                            return campaign.methods.finalizeRequest(_this.props.id).send({
                                from: accounts[0]
                            });

                        case 6:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, _this2);
        })), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    // Approve a request.


    // Finalie a request.


    (0, _createClass3.default)(RequestRow, [{
        key: 'render',
        value: function render() {
            var Row = _semanticUiReact.Table.Row,
                Cell = _semanticUiReact.Table.Cell;
            var _props = this.props,
                id = _props.id,
                request = _props.request,
                approversCount = _props.approversCount;

            var readyToFinalize = request.approvalCount > approversCount / 2;

            // The ROW attribs used below are specific to 
            // semantic-ui.
            // disble row if already done.
            // toggle button if already approved.
            // toggle button if already finalized.


            return _react2.default.createElement(Row, { disabled: request.complete, positive: readyToFinalize && !request.complete, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                }
            }, _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            }, ' ', id), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            }, ' ', request.description), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            }, ' ', _web2.default.utils.fromWei(request.value, 'ether')), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }, ' ', request.recipient), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            }, ' ', request.approvalCount, '/', approversCount), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            }, request.complete ? null : _react2.default.createElement(_semanticUiReact.Button, { color: 'green', basic: true,
                onClick: this.onApprove, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            }, 'Approve')), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            }, request.complete ? null : _react2.default.createElement(_semanticUiReact.Button, { color: 'teal', basic: true,
                onClick: this.onFinalize, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                }
            }, 'Finalize')));
        }
    }]);

    return RequestRow;
}(_react.Component);

exports.default = RequestRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFJlcXVlc3RSb3cuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJUYWJsZSIsIkJ1dHRvbiIsIndlYjMiLCJDYW1wYWlnbiIsIlJlcXVlc3RSb3ciLCJvbkFwcHJvdmUiLCJjYW1wYWlnbiIsInByb3BzIiwiYWRkcmVzcyIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwiYXBwcm92ZVJlcXVlc3QiLCJpZCIsInNlbmQiLCJmcm9tIiwib25GaW5hbGl6ZSIsImZpbmFsaXplUmVxdWVzdCIsIlJvdyIsIkNlbGwiLCJyZXF1ZXN0IiwiYXBwcm92ZXJzQ291bnQiLCJyZWFkeVRvRmluYWxpemUiLCJhcHByb3ZhbENvdW50IiwiY29tcGxldGUiLCJkZXNjcmlwdGlvbiIsInV0aWxzIiwiZnJvbVdlaSIsInZhbHVlIiwicmVjaXBpZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFROzs7O0FBQ2YsQUFBUSxBQUFPOztBQUNmLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQWM7Ozs7Ozs7OztJQUVmLEE7Ozs7Ozs7Ozs7Ozs7Ozt3TixBQUdGLHFGQUFZLG1CQUFBOzBCQUFBOzBFQUFBOzBCQUFBO3FEQUFBOzZCQUNGO0FBREUsdUNBQ1Msd0JBQVMsTUFBQSxBQUFLLE1BRHZCLEFBQ1MsQUFBb0I7NENBRDdCO21DQUVlLGNBQUEsQUFBSyxJQUZwQixBQUVlLEFBQVM7OzZCQUExQjtBQUZFLGdEQUFBOzRDQUFBOzRDQU1GLEFBQVMsUUFBVCxBQUFpQixlQUFlLE1BQUEsQUFBSyxNQUFyQyxBQUEyQyxJQUEzQyxBQUNMO3NDQUNTLFNBUkYsQUFNRixBQUNBLEFBQ0ksQUFBUztBQURiLEFBQ0YsNkJBRkU7OzZCQU5FOzZCQUFBOzRDQUFBOztBQUFBO3dCQUFBO0EsbUIsQUFhWixzRkFBYSxvQkFBQTswQkFBQTs0RUFBQTswQkFBQTt1REFBQTs2QkFDSDtBQURHLHVDQUNRLHdCQUFTLE1BQUEsQUFBSyxNQUR0QixBQUNRLEFBQW9COzZDQUQ1QjttQ0FFYyxjQUFBLEFBQUssSUFGbkIsQUFFYyxBQUFTOzs2QkFBMUI7QUFGRyxpREFBQTs2Q0FBQTs0Q0FJSCxBQUFTLFFBQVQsQUFBaUIsZ0JBQWdCLE1BQUEsQUFBSyxNQUF0QyxBQUE0QyxJQUE1QyxBQUNMO3NDQUNTLFNBTkQsQUFJSCxBQUNBLEFBQ0ksQUFBUztBQURiLEFBQ0YsNkJBRkU7OzZCQUpHOzZCQUFBOzZDQUFBOztBQUFBO3lCQUFBO0E7QUFkYjs7QUFhQTs7Ozs7Ozs7aUNBV1M7Z0JBQUEsQUFDRSxNQURGLEFBQ2UsdUJBRGYsQUFDRTtnQkFERixBQUNPLE9BRFAsQUFDZSx1QkFEZixBQUNPO3lCQUMwQixLQUZqQyxBQUVzQztnQkFGdEMsQUFFRSxZQUZGLEFBRUU7Z0JBRkYsQUFFTSxpQkFGTixBQUVNO2dCQUZOLEFBRWUsd0JBRmYsQUFFZSxBQUNwQjs7Z0JBQU0sa0JBQWtCLFFBQUEsQUFBUSxnQkFBZ0IsaUJBQWhELEFBQWdFLEFBRWhFOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7OzttQ0FDSyxjQUFELE9BQUssVUFBWSxRQUFqQixBQUF5QixVQUFVLFVBQVksbUJBQW1CLENBQUMsUUFBbkUsQUFBMkU7OEJBQTNFO2dDQUFBLEFBQ0k7QUFESjthQUFBLGtCQUNLLGNBQUQ7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQUFRLEtBRFosQUFDSSxBQUNBLHFCQUFDLGNBQUQ7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQUFRLGFBRlosQUFFSSxBQUFnQixBQUNoQiw4QkFBQyxjQUFEOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFBUSxtQkFBQSxBQUFLLE1BQUwsQUFBVyxRQUFRLFFBQW5CLEFBQTJCLE9BSHZDLEFBR0ksQUFBUSxBQUFrQyxBQUMxQywyQkFBQyxjQUFEOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFBUSxhQUpaLEFBSUksQUFBZ0IsQUFDaEIsNEJBQUMsY0FBRDs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBQVEsYUFBUixBQUFnQixlQUFnQixLQUxwQyxBQUtJLEFBQ0EsaUNBQUMsY0FBRDs7OEJBQUE7Z0NBQUEsQUFDRTtBQURGO0FBQUEsdUJBQ0UsQUFBUSxXQUFSLEFBQWtCLHVCQUNoQixBQUFDLHlDQUFPLE9BQVIsQUFBYyxTQUFRLE9BQXRCLEFBQ0k7eUJBQVMsS0FEYixBQUNrQjs4QkFEbEI7Z0NBQUE7QUFBQTthQUFBLEVBUlIsQUFNSSxBQUVJLEFBS0osNkJBQUMsY0FBRDs7OEJBQUE7Z0NBQUEsQUFDQztBQUREO0FBQUEsdUJBQ0MsQUFBUSxXQUFSLEFBQWtCLHVCQUNmLEFBQUMseUNBQU8sT0FBUixBQUFjLFFBQU8sT0FBckIsQUFDSTt5QkFBUyxLQURiLEFBQ2tCOzhCQURsQjtnQ0FBQTtBQUFBO2FBQUEsRUFoQlosQUFDSSxBQWFJLEFBRUksQUFPZjs7Ozs7QUE3RG9CLEEsQUFpRXpCOztrQkFBQSxBQUFlIiwiZmlsZSI6IlJlcXVlc3RSb3cuanMiLCJzb3VyY2VSb290IjoiQzovRXRoZXJldW0tQmxvY2tjaGFpbi9TbWFydENvbnRyYWN0cy9raWNrc3RhcnQifQ==