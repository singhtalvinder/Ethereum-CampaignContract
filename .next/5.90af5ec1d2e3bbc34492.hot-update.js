webpackHotUpdate(5,{

/***/ 741:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(85);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(86);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(41);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(42);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(46);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(481);

var _campaign = __webpack_require__(1000);

var _campaign2 = _interopRequireDefault(_campaign);

var _web = __webpack_require__(676);

var _web2 = _interopRequireDefault(_web);

var _routes = __webpack_require__(734);

var _layout = __webpack_require__(1190);

var _layout2 = _interopRequireDefault(_layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Ethereum-Blockchain\\SmartContracts\\kickstart\\pages\\campaigns\\requests\\new.js?entry';


var RequestNew = function (_Component) {
    (0, _inherits3.default)(RequestNew, _Component);

    function RequestNew() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, RequestNew);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestNew.__proto__ || (0, _getPrototypeOf2.default)(RequestNew)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            value: '',
            description: '',
            recipient: '',
            loading: false,
            errorMessage: ''
        }, _this.onSubmit = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                var campaign, _this$state, description, value, recipient, accounts;

                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                event.preventDefault();

                                campaign = (0, _campaign2.default)(_this.props.address);
                                _this$state = _this.state, description = _this$state.description, value = _this$state.value, recipient = _this$state.recipient;

                                _this.setState({ loading: true, errorMessage: '' });

                                _context.prev = 4;
                                _context.next = 7;
                                return _web2.default.eth.getAccounts();

                            case 7:
                                accounts = _context.sent;
                                _context.next = 10;
                                return campaign.methods.createRequest(description, _web2.default.utils.toWei(value, 'ether'), recipient).send({ from: accounts[0] });

                            case 10:

                                // Navigate to list of all requests on success.
                                _routes.Router.pushRoute('/campaigns/' + _this.props.address + '/requests');

                                _context.next = 16;
                                break;

                            case 13:
                                _context.prev = 13;
                                _context.t0 = _context['catch'](4);

                                _this.setState({ errorMessage: _context.t0.message });

                            case 16:
                                _this.setState({ loading: false });

                            case 17:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[4, 13]]);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(RequestNew, [{
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(_layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            }, 'Create a Request'), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit,
                error: !!this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                }
            }, ' Description'), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.description,
                onChange: function onChange(event) {
                    return _this3.setState({ description: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 65
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 66
                }
            }, ' Value in Ether'), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.value,
                onChange: function onChange(event) {
                    return _this3.setState({ value: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 67
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 75
                }
            }, ' Recipient'), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.recipient,
                onChange: function onChange(event) {
                    return _this3.setState({ recipient: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 76
                }
            })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!!', content: this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 82
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { primary: true, loading: this.state.loading, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 83
                }
            }, 'Create!')));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(props) {
                var address;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                address = props.query.address;
                                return _context2.abrupt('return', { address: address });

                            case 2:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function getInitialProps(_x2) {
                return _ref3.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return RequestNew;
}(_react.Component);

exports.default = RequestNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYW1wYWlnbnNcXHJlcXVlc3RzXFxuZXcuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJGb3JtIiwiQnV0dG9uIiwiSW5wdXQiLCJNZXNzYWdlIiwiQ2FtcGFpZ24iLCJ3ZWIzIiwiTGluayIsIlJvdXRlciIsIkxheW91dCIsIlJlcXVlc3ROZXciLCJzdGF0ZSIsInZhbHVlIiwiZGVzY3JpcHRpb24iLCJyZWNpcGllbnQiLCJsb2FkaW5nIiwiZXJyb3JNZXNzYWdlIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY2FtcGFpZ24iLCJwcm9wcyIsImFkZHJlc3MiLCJzZXRTdGF0ZSIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwiY3JlYXRlUmVxdWVzdCIsInV0aWxzIiwidG9XZWkiLCJzZW5kIiwiZnJvbSIsInB1c2hSb3V0ZSIsIm1lc3NhZ2UiLCJ0YXJnZXQiLCJxdWVyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUTs7OztBQUNmLEFBQVEsQUFBTSxBQUFRLEFBQU87O0FBQzdCLEFBQU8sQUFBYzs7OztBQUNyQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUSxBQUFNLEFBQWE7O0FBQzNCLEFBQU8sQUFBWTs7Ozs7Ozs7O0lBRWIsQTs7Ozs7Ozs7Ozs7Ozs7O3dOLEFBRUY7bUJBQVEsQUFDRyxBQUNQO3lCQUZJLEFBRVMsQUFDYjt1QkFISSxBQUdPLEFBQ1g7cUJBSkksQUFJSyxBQUNUOzBCQUxJLEEsQUFLVTtBQUxWLEFBQ0osaUJBWUosQTtpR0FBVyxpQkFBQSxBQUFNLE9BQU47MEVBQUE7OzhFQUFBOzhCQUFBO3lEQUFBO2lDQUNQO3NDQUFBLEFBQU0sQUFFQTs7QUFIQywyQ0FHVSx3QkFBUyxNQUFBLEFBQUssTUFIeEIsQUFHVSxBQUFvQjs4Q0FFRyxNQUxqQyxBQUtzQyxPQUx0QyxBQUtBLDBCQUxBLEFBS0EsYUFMQSxBQUthLG9CQUxiLEFBS2EsT0FMYixBQUtvQix3QkFMcEIsQUFLb0IsQUFFM0I7O3NDQUFBLEFBQUssU0FBUyxFQUFDLFNBQUQsQUFBVSxNQUFNLGNBUHZCLEFBT1AsQUFBYyxBQUE2Qjs7Z0RBUHBDO2dEQUFBO3VDQVVvQixjQUFBLEFBQUssSUFWekIsQUFVb0IsQUFBUzs7aUNBQTFCO0FBVkgsb0RBQUE7Z0RBQUE7dUNBV0csU0FBQSxBQUFTLFFBQVQsQUFBaUIsY0FBakIsQUFDRixhQUNBLGNBQUEsQUFBSyxNQUFMLEFBQVcsTUFBWCxBQUFpQixPQUZmLEFBRUYsQUFBd0IsVUFGdEIsQUFHRixXQUhFLEFBS0QsS0FBSyxFQUFDLE1BQU0sU0FoQmQsQUFXRyxBQUtJLEFBQU8sQUFBUzs7aUNBRTFCOztBQUNBOytDQUFBLEFBQU8sMEJBQXdCLE1BQUEsQUFBSyxNQUFwQyxBQUEwQyxVQW5CdkM7O2dEQUFBO0FBQUE7O2lDQUFBO2dEQUFBO2dFQXNCSDs7c0NBQUEsQUFBSyxTQUFTLEVBQUMsY0FBYyxZQXRCMUIsQUFzQkgsQUFBYyxBQUFtQjs7aUNBRXJDO3NDQUFBLEFBQUssU0FBUyxFQUFDLFNBeEJSLEFBd0JQLEFBQWMsQUFBVTs7aUNBeEJqQjtpQ0FBQTtnREFBQTs7QUFBQTt5Q0FBQTtBOzs7Ozs7Ozs7O2lDQTJCRjt5QkFDTDs7bUNBQ0ksQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDQTtBQURBO0FBQUEsYUFBQSxrQkFDQSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFEQSxBQUNBLEFBQ0kscUNBQUEsQUFBQyx1Q0FBSyxVQUFZLEtBQWxCLEFBQXVCLEFBQ25CO3VCQUFRLENBQUMsQ0FBQyxLQUFBLEFBQUssTUFEbkIsQUFDeUI7OEJBRHpCO2dDQUFBLEFBRUk7QUFGSjsrQkFFSyxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBLEFBQ0E7QUFEQTtBQUFBLCtCQUNBLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURBLEFBQ0EsQUFDQSxpQ0FBQSxBQUFDO3VCQUNXLEtBQUEsQUFBSyxNQURqQixBQUN1QixBQUNuQjswQkFBVSx5QkFBQTsyQkFDTixPQUFBLEFBQUssU0FBUyxFQUFDLGFBQWEsTUFBQSxBQUFNLE9BRDVCLEFBQ04sQUFBYyxBQUEyQjtBQUhqRDs7OEJBQUE7Z0NBSkosQUFFSSxBQUVBLEFBT0E7QUFQQTtBQUNJLGlDQU1ILGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDQTtBQURBO0FBQUEsK0JBQ0EsY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREEsQUFDQSxBQUNBLG9DQUFBLEFBQUM7dUJBQ1ksS0FBQSxBQUFLLE1BRGxCLEFBQ3dCLEFBQ3BCOzBCQUFVLHlCQUFBOzJCQUNOLE9BQUEsQUFBSyxTQUFTLEVBQUMsT0FBTyxNQUFBLEFBQU0sT0FEdEIsQUFDTixBQUFjLEFBQXFCO0FBSDNDOzs4QkFBQTtnQ0FiSixBQVdJLEFBRUEsQUFPQTtBQVBBO0FBQ0ksaUNBTUgsY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUNBO0FBREE7QUFBQSwrQkFDQSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFEQSxBQUNBLEFBQ0EsK0JBQUEsQUFBQzt1QkFDWSxLQUFBLEFBQUssTUFEbEIsQUFDd0IsQUFDcEI7MEJBQVUseUJBQUE7MkJBQ04sT0FBQSxBQUFLLFNBQVMsRUFBQyxXQUFXLE1BQUEsQUFBTSxPQUQxQixBQUNOLEFBQWMsQUFBeUI7QUFIL0M7OzhCQUFBO2dDQXRCSixBQW9CSSxBQUVBLEFBTUE7QUFOQTtBQUNJLGlDQUtKLEFBQUMsMENBQVEsT0FBVCxNQUFlLFFBQWYsQUFBc0IsVUFBUyxTQUFTLEtBQUEsQUFBSyxNQUE3QyxBQUFtRDs4QkFBbkQ7Z0NBNUJKLEFBNEJJLEFBQ0E7QUFEQTtnQ0FDQSxBQUFDLHlDQUFPLFNBQVIsTUFBZ0IsU0FBUyxLQUFBLEFBQUssTUFBOUIsQUFBb0M7OEJBQXBDO2dDQUFBO0FBQUE7ZUFoQ1osQUFDSSxBQUVJLEFBNkJJLEFBSWY7Ozs7O21IQXJFNEIsQTs7Ozs7aUNBQ2xCO0EsMENBQVcsTSxBQUFNLE1BQWpCLEE7a0VBQ0EsRUFBQyxTLEFBQUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFaVSxBLEFBa0Z6Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJuZXcuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiQzovRXRoZXJldW0tQmxvY2tjaGFpbi9TbWFydENvbnRyYWN0cy9raWNrc3RhcnQifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "C:\\Ethereum-Blockchain\\SmartContracts\\kickstart\\pages\\campaigns\\requests\\new.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Ethereum-Blockchain\\SmartContracts\\kickstart\\pages\\campaigns\\requests\\new.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(83)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/campaigns\\requests\\new")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS45MGFmNWVjMWQyZTNiYmMzNDQ5Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvY2FtcGFpZ25zL3JlcXVlc3RzL25ldy5qcz8xMTk3OWM2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge0Zvcm0sIEJ1dHRvbiwgSW5wdXQsIE1lc3NhZ2V9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcclxuaW1wb3J0IENhbXBhaWduIGZyb20gJy4uLy4uLy4uL2V0aGVyZXVtL2NhbXBhaWduJztcclxuaW1wb3J0IHdlYjMgZnJvbSAnLi4vLi4vLi4vZXRoZXJldW0vd2ViMyc7XHJcbmltcG9ydCB7TGluaywgUm91dGVyfSBmcm9tICcuLi8uLi8uLi9yb3V0ZXMnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0JztcclxuXHJcbmNsYXNzIFJlcXVlc3ROZXcgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIHN0YXRlID0ge1xyXG4gICAgICAgIHZhbHVlOiAnJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJycsXHJcbiAgICAgICAgcmVjaXBpZW50OiAnJyxcclxuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICBlcnJvck1lc3NhZ2U6ICcnXHJcbiAgICB9O1xyXG5cclxuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMocHJvcHMpIHtcclxuICAgICAgICBjb25zdCB7YWRkcmVzc30gPSBwcm9wcy5xdWVyeTtcclxuICAgICAgICByZXR1cm4ge2FkZHJlc3N9O1xyXG4gICAgfVxyXG5cclxuICAgIG9uU3VibWl0ID0gYXN5bmMgZXZlbnQgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGNhbXBhaWduID0gQ2FtcGFpZ24odGhpcy5wcm9wcy5hZGRyZXNzKTtcclxuXHJcbiAgICAgICAgY29uc3Qge2Rlc2NyaXB0aW9uLCB2YWx1ZSwgcmVjaXBpZW50fSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2xvYWRpbmc6IHRydWUsIGVycm9yTWVzc2FnZTonJ30pO1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XHJcbiAgICAgICAgICAgIGF3YWl0IGNhbXBhaWduLm1ldGhvZHMuY3JlYXRlUmVxdWVzdChcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgd2ViMy51dGlscy50b1dlaSh2YWx1ZSwgJ2V0aGVyJyksXHJcbiAgICAgICAgICAgICAgICByZWNpcGllbnRcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIC5zZW5kKHtmcm9tOiBhY2NvdW50c1swXX0pO1xyXG5cclxuICAgICAgICAgICAgLy8gTmF2aWdhdGUgdG8gbGlzdCBvZiBhbGwgcmVxdWVzdHMgb24gc3VjY2Vzcy5cclxuICAgICAgICAgICAgUm91dGVyLnB1c2hSb3V0ZShgL2NhbXBhaWducy8ke3RoaXMucHJvcHMuYWRkcmVzc30vcmVxdWVzdHNgKTtcclxuXHJcbiAgICAgICAgfSBjYXRjaChlcnIpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZXJyb3JNZXNzYWdlOiBlcnIubWVzc2FnZX0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nOiBmYWxzZX0pO1xyXG4gICAgfTtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgPGgzPkNyZWF0ZSBhIFJlcXVlc3Q8L2gzPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0gb25TdWJtaXQgPSB7dGhpcy5vblN1Ym1pdH1cclxuICAgICAgICAgICAgICAgICAgICBlcnJvciA9eyEhdGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD4gRGVzY3JpcHRpb248L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9IHt0aGlzLnN0YXRlLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtkZXNjcmlwdGlvbjogZXZlbnQudGFyZ2V0LnZhbHVlfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uRmllbGQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD4gVmFsdWUgaW4gRXRoZXI8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHt0aGlzLnN0YXRlLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt2YWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uRmllbGQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD4gUmVjaXBpZW50PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7dGhpcy5zdGF0ZS5yZWNpcGllbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3JlY2lwaWVudDogZXZlbnQudGFyZ2V0LnZhbHVlfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uRmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1lc3NhZ2UgZXJyb3IgaGVhZGVyPVwiT29wcyEhXCIgY29udGVudD17dGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBwcmltYXJ5IGxvYWRpbmc9e3RoaXMuc3RhdGUubG9hZGluZ30+Q3JlYXRlITwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVxdWVzdE5ldztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9jYW1wYWlnbnMvcmVxdWVzdHMvbmV3LmpzP2VudHJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTs7QUFKQTtBQVlBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUpBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQUFBO0FBVUE7QUFDQTtBQURBO0FBVkE7QUFBQTtBQVdBO0FBQ0E7QUFNQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBcEJBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFzQkE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUF6QkE7QUFBQTtBQUFBOztBQUFBO0FBQUE7Ozs7Ozs7Ozs7O0FBMkJBO0FBQ0E7QUFDQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFEQTtBQUVBO0FBRkE7QUFFQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUhBOztBQUFBO0FBT0E7QUFQQTtBQUNBOztBQU1BO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBSEE7O0FBQUE7QUFPQTtBQVBBO0FBQ0E7O0FBTUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFIQTs7QUFBQTtBQU1BO0FBTkE7QUFDQTtBQUtBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBSUE7Ozs7Ozs7Ozs7QUFwRUE7QUFBQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=