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

var _layout = require('../../components/layout');

var _layout2 = _interopRequireDefault(_layout);

var _factory = require('../../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Ethereum-Blockchain\\SmartContracts\\kickstart\\pages\\campaigns\\new.js?entry';

// for automatic routing.


var CampaignNew = function (_Component) {
    (0, _inherits3.default)(CampaignNew, _Component);

    function CampaignNew() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, CampaignNew);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CampaignNew.__proto__ || (0, _getPrototypeOf2.default)(CampaignNew)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            minimumContribution: '',
            errorMessage: '',
            loading: false // for button.
        }, _this.onSubmit = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                var accounts;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                // function on a contract is always async in nature, Hence used.
                                event.preventDefault();

                                _this.setState({ loading: true, errorMessage: '' });

                                _context.prev = 2;
                                _context.next = 5;
                                return _web2.default.eth.getAccounts();

                            case 5:
                                accounts = _context.sent;
                                _context.next = 8;
                                return _factory2.default.methods.createCampaign(_this.state.minimumContribution).send({
                                    // Metamask attempts to automatically calculates the gas when
                                    // invoking a send message from the browser.
                                    // so, we don't need to specify the gas amount here.
                                    from: accounts[0]
                                });

                            case 8:

                                // Redirect to campaign index route.
                                _routes.Router.pushRoute('/');

                                _context.next = 14;
                                break;

                            case 11:
                                _context.prev = 11;
                                _context.t0 = _context['catch'](2);

                                _this.setState({ errorMessage: _context.t0.message });

                            case 14:

                                // reset state.
                                _this.setState({ loading: false });

                            case 15:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[2, 11]]);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(CampaignNew, [{
        key: 'render',
        value: function render() {
            var _this3 = this;

            // Set error to false in the Form tag below 
            // and it will not be initially displayed on screen.
            // we use the 2 !! marks there.
            // the inner one will flip into opposite of the existing value as
            // a boolean form.
            // the outer one will flip it back..
            // so !!"empty string" is false, since empty string is a false value.
            return _react2.default.createElement(_layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                }
            }, 'New Campaign!! '), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                }
            }, 'Minimum Contribution'), _react2.default.createElement(_semanticUiReact.Input, {
                label: 'wei',
                labelPosition: 'right',
                value: this.state.minimumContribution,
                onChange: function onChange(event) {
                    return _this3.setState({ minimumContribution: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 61
                }
            })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!', content: this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 69
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 70
                }
            }, 'Create!')));
        }
    }]);

    return CampaignNew;
}(_react.Component);

exports.default = CampaignNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYW1wYWlnbnNcXG5ldy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkZvcm0iLCJCdXR0b24iLCJJbnB1dCIsIk1lc3NhZ2UiLCJMYXlvdXQiLCJmYWN0b3J5Iiwid2ViMyIsIlJvdXRlciIsIkNhbXBhaWduTmV3Iiwic3RhdGUiLCJtaW5pbXVtQ29udHJpYnV0aW9uIiwiZXJyb3JNZXNzYWdlIiwibG9hZGluZyIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNldFN0YXRlIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJjcmVhdGVDYW1wYWlnbiIsInNlbmQiLCJmcm9tIiwicHVzaFJvdXRlIiwibWVzc2FnZSIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFROzs7O0FBQ2YsQUFBUSxBQUFNLEFBQVEsQUFBTzs7QUFDN0IsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBYTs7OztBQUNwQixBQUFPLEFBQVU7Ozs7QUFHakIsQUFBUSxBQUFhOzs7Ozs7QUFEckI7OztJQUdNLEE7Ozs7Ozs7Ozs7Ozs7OzswTkFDRixBO2lDQUFRLEFBQ2lCLEFBQ3JCOzBCQUZJLEFBRVUsQUFDZDtxQkFISSxBQUdLLE1BSEwsQSxBQUdXO0FBSFgsQUFDSixpQixBQUtKO2lHQUFXLGlCQUFBLEFBQU8sT0FBUDtvQkFBQTs4RUFBQTs4QkFBQTt5REFBQTtpQ0FDUDtBQUNBO3NDQUFBLEFBQU0sQUFFTjs7c0NBQUEsQUFBSyxTQUFTLEVBQUMsU0FBRCxBQUFVLE1BQU0sY0FKdkIsQUFJUCxBQUFjLEFBQThCOztnREFKckM7Z0RBQUE7dUNBUW9CLGNBQUEsQUFBSyxJQVJ6QixBQVFvQixBQUFTOztpQ0FBMUI7QUFSSCxvREFBQTtnREFBQTt5REFTRyxBQUFRLFFBQVIsQUFDTCxlQUFlLE1BQUEsQUFBSyxNQURmLEFBQ3FCLHFCQURyQixBQUVMO0FBRUc7QUFDQTtBQUNBOzBDQUFNLFNBZlAsQUFTRyxBQUVBLEFBSUksQUFBUztBQUpiLEFBQ0YsaUNBSEU7O2lDQVNOOztBQUNBOytDQUFBLEFBQU8sVUFuQkosQUFtQkgsQUFBaUI7O2dEQW5CZDtBQUFBOztpQ0FBQTtnREFBQTtnRUFzQkg7O3NDQUFBLEFBQUssU0FBUyxFQUFDLGNBQWMsWUF0QjFCLEFBc0JILEFBQWMsQUFBbUI7O2lDQUdyQzs7QUFDQTtzQ0FBQSxBQUFLLFNBQVMsRUFBQyxTQTFCUixBQTBCUCxBQUFjLEFBQVU7O2lDQTFCakI7aUNBQUE7Z0RBQUE7O0FBQUE7eUNBQUE7QTs7Ozs7Ozs7OztpQ0E2QkY7eUJBQ1Q7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0k7bUNBQ0ksQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsYUFBQSxrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBRUEsb0NBQUEsQUFBQyx1Q0FBSyxVQUFXLEtBQWpCLEFBQXNCLFVBQVUsT0FBUSxDQUFDLENBQUMsS0FBQSxBQUFLLE1BQS9DLEFBQXFEOzhCQUFyRDtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ssY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUNBO0FBREE7QUFBQSwrQkFDQSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFEQSxBQUNBLEFBQ0EseUNBQUEsQUFBQzt1QkFBRCxBQUNZLEFBQ1I7K0JBRkosQUFFbUIsQUFDZjt1QkFBUyxLQUFBLEFBQUssTUFIbEIsQUFHd0IsQUFDcEI7MEJBQVkseUJBQUE7MkJBQ1AsT0FBQSxBQUFLLFNBQVMsRUFBQyxxQkFBcUIsTUFBQSxBQUFNLE9BRG5DLEFBQ1AsQUFBYyxBQUFtQztBQUwxRDs7OEJBQUE7Z0NBSEosQUFDSSxBQUVBLEFBUUE7QUFSQTtBQUNJLGlDQU9KLEFBQUMsMENBQVEsT0FBVCxNQUFlLFFBQWYsQUFBd0IsU0FBUSxTQUFXLEtBQUEsQUFBSyxNQUFoRCxBQUFzRDs4QkFBdEQ7Z0NBWEosQUFXSSxBQUNBO0FBREE7Z0NBQ0EsQUFBQyx5Q0FBTyxTQUFVLEtBQUEsQUFBSyxNQUF2QixBQUE2QixTQUFTLFNBQXRDOzhCQUFBO2dDQUFBO0FBQUE7ZUFoQlosQUFDSSxBQUdJLEFBWUksQUFHZjs7Ozs7QUEvRHFCLEEsQUFrRTFCOztrQkFBQSxBQUFlIiwiZmlsZSI6Im5ldy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJDOi9FdGhlcmV1bS1CbG9ja2NoYWluL1NtYXJ0Q29udHJhY3RzL2tpY2tzdGFydCJ9