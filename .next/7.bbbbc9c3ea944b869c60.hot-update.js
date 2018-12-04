webpackHotUpdate(7,{

/***/ 1195:
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

var _layout = __webpack_require__(1175);

var _layout2 = _interopRequireDefault(_layout);

var _campaign = __webpack_require__(1196);

var _campaign2 = _interopRequireDefault(_campaign);

var _semanticUiReact = __webpack_require__(481);

var _web = __webpack_require__(1000);

var _web2 = _interopRequireDefault(_web);

var _ContributeForm = __webpack_require__(1198);

var _ContributeForm2 = _interopRequireDefault(_ContributeForm);

var _routes = __webpack_require__(733);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Ethereum-Blockchain\\SmartContracts\\kickstart\\pages\\campaigns\\show.js?entry';


var CampaignShow = function (_Component) {
    (0, _inherits3.default)(CampaignShow, _Component);

    function CampaignShow() {
        (0, _classCallCheck3.default)(this, CampaignShow);

        return (0, _possibleConstructorReturn3.default)(this, (CampaignShow.__proto__ || (0, _getPrototypeOf2.default)(CampaignShow)).apply(this, arguments));
    }

    (0, _createClass3.default)(CampaignShow, [{
        key: 'renderCards',
        value: function renderCards() {
            var _props = this.props,
                balance = _props.balance,
                manager = _props.manager,
                minimumContribution = _props.minimumContribution,
                requestCount = _props.requestCount,
                approversCount = _props.approversCount;

            var items = [{
                header: manager,
                meta: 'Address of Manager',
                description: 'The manager created this Campaign and \
                    can create requests to withdraw money',
                style: { overflowWrap: 'break-word' }
            }, {
                header: minimumContribution,
                mata: 'Minimum Contribution (wei)',
                description: 'You must contribute at least this much \
                    wei to become an approver'
            }, {
                header: requestCount,
                meta: 'Number of Requests',
                description: 'A request tries to withdraw money from the contract.\
                    Request must be approved by approvers.'
            }, {
                header: approversCount,
                meta: 'Number of Approvers',
                description: 'A of people who have already donated to the campaign.'
            }, {
                header: _web2.default.utils.fromWei(balance, 'ether'),
                meta: 'Campaign Balance (ether)',
                description: 'The balance is how much money this campaign has left to spend.'
            }];

            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 76
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 81
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 82
                }
            }, 'Campaign Show'), _react2.default.createElement(_semanticUiReact.Grid, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 83
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 84
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 85
                }
            }, this.renderCards()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 89
                }
            }, _react2.default.createElement(_ContributeForm2.default, { address: this.props.address, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 90
                }
            }))), _react2.default.createElement(_semanticUiReact.Grid.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 93
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 94
                }
            }, _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/requests', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 95
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 96
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 97
                }
            }, 'View Request')))))));
        }
    }], [{
        key: 'getInitialProps',

        // props here is different than the actual component props.
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
                var campaign, summary;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                // not part of actual instance.
                                // actual address of the campign we
                                // are trying to show to user.
                                campaign = (0, _campaign2.default)(props.query.address);
                                _context.next = 3;
                                return campaign.methods.getSummary().call();

                            case 3:
                                summary = _context.sent;

                                console.log(summary);

                                return _context.abrupt('return', {
                                    // so that it can be easy to access using: 
                                    // this.props. all the below ones seperately.
                                    address: props.query.address,
                                    minimumContribution: summary[0],
                                    balance: summary[1],
                                    requestCount: summary[2],
                                    approversCount: summary[3],
                                    manager: summary[4]
                                });

                            case 6:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps(_x) {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return CampaignShow;
}(_react.Component);

exports.default = CampaignShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYW1wYWlnbnNcXHNob3cuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJMYXlvdXQiLCJDYW1wYWlnbiIsIkNhcmQiLCJHcmlkIiwiQnV0dG9uIiwid2ViMyIsIkNvbnRyaWJ1dGVGb3JtIiwiTGluayIsIkNhbXBhaWduU2hvdyIsInByb3BzIiwiYmFsYW5jZSIsIm1hbmFnZXIiLCJtaW5pbXVtQ29udHJpYnV0aW9uIiwicmVxdWVzdENvdW50IiwiYXBwcm92ZXJzQ291bnQiLCJpdGVtcyIsImhlYWRlciIsIm1ldGEiLCJkZXNjcmlwdGlvbiIsInN0eWxlIiwib3ZlcmZsb3dXcmFwIiwibWF0YSIsInV0aWxzIiwiZnJvbVdlaSIsInJlbmRlckNhcmRzIiwiYWRkcmVzcyIsImNhbXBhaWduIiwicXVlcnkiLCJtZXRob2RzIiwiZ2V0U3VtbWFyeSIsImNhbGwiLCJzdW1tYXJ5IiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUTs7OztBQUNmLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBUyxBQUFNLEFBQU07O0FBQ3JCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQW9COzs7O0FBQzNCLEFBQVEsQUFBVzs7Ozs7OztJQUViLEE7Ozs7Ozs7Ozs7O3NDQXdCWTt5QkFPTixLQVBNLEFBT0Q7Z0JBUEMsQUFFTixpQkFGTSxBQUVOO2dCQUZNLEFBR04saUJBSE0sQUFHTjtnQkFITSxBQUlOLDZCQUpNLEFBSU47Z0JBSk0sQUFLTixzQkFMTSxBQUtOO2dCQUxNLEFBTU4sd0JBTk0sQUFNTixBQUlKOztnQkFBTTt3QkFDRixBQUNXLEFBQ1A7c0JBRkosQUFFVSxBQUNOOzZCQUhKLEFBR2lCLEFBRWI7O3VCQUFPLEVBQUMsY0FORixBQUNWLEFBS1csQUFBZTtBQUwxQixBQUNJLGFBRk07d0JBUVYsQUFDWSxBQUNSO3NCQUZKLEFBRVUsQUFDTjs2QkFYTSxBQVFWLEFBR2lCOztBQUhqQixBQUNJO3dCQUtKLEFBQ1ksQUFDUjtzQkFGSixBQUVVLEFBQ047NkJBakJNLEFBY1YsQUFHaUI7O0FBSGpCLEFBQ0k7d0JBS0osQUFDWSxBQUNSO3NCQUZKLEFBRVUsQUFDTjs2QkF2Qk0sQUFvQlYsQUFHaUI7QUFIakIsQUFDSTt3QkFLUSxjQUFBLEFBQUssTUFBTCxBQUFXLFFBQVgsQUFBbUIsU0FEL0IsQUFDWSxBQUE0QixBQUNwQztzQkFGSixBQUVVLEFBQ047NkJBNUJSLEFBQWMsQUF5QlYsQUFHaUIsQUFLckI7QUFSSSxBQUNJOztpREFPRCxBQUFDLHNCQUFELEFBQU0sU0FBTSxPQUFaLEFBQW1COzhCQUFuQjtnQ0FBUCxBQUFPLEFBQ1Y7QUFEVTthQUFBOzs7O2lDQUdGLEFBQ0w7bUNBQ0ksQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDQTtBQURBO0FBQUEsYUFBQSxrQkFDQSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFEQSxBQUNBLEFBQ0Esa0NBQUEsQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ssY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSyxjQUFELHNCQUFBLEFBQU0sVUFBTyxPQUFiLEFBQW9COzhCQUFwQjtnQ0FBQSxBQUNLO0FBREw7b0JBREosQUFDSSxBQUNLLEFBQUssQUFHVixnQ0FBQyxjQUFELHNCQUFBLEFBQU0sVUFBTyxPQUFiLEFBQW9COzhCQUFwQjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksQUFBQywwQ0FBZSxTQUFXLEtBQUEsQUFBSyxNQUFoQyxBQUFzQzs4QkFBdEM7Z0NBUFosQUFDSSxBQUtJLEFBQ0ksQUFHUjtBQUhRO2tDQUdQLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ssY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUNBO0FBREE7QUFBQSwrQkFDQSxBQUFDLDhCQUFLLHVCQUF1QixLQUFBLEFBQUssTUFBNUIsQUFBa0MsVUFBeEM7OEJBQUE7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUE7OzhCQUFBO2dDQUFBLEFBQ0E7QUFEQTtBQUFBLCtCQUNBLEFBQUMseUNBQU8sU0FBUjs4QkFBQTtnQ0FBQTtBQUFBO2VBakJoQixBQUNJLEFBRUEsQUFVSSxBQUNJLEFBQ0EsQUFDSSxBQUNBLEFBUW5COzs7YUE5RkQ7Ozs7aUhBQzZCLEE7Ozs7O2lDQUN6QjtBQUNBO0FBQ0E7QUFDTTtBLDJDQUFXLHdCQUFTLE1BQUEsQUFBTSxNQUFmLEFBQXFCLEE7O3VDQUVmLFNBQUEsQUFBUyxRQUFULEFBQWlCLGFBQWpCLEFBQThCLEE7O2lDQUEvQztBLG1EQUNOOzt3Q0FBQSxBQUFRLElBQVIsQUFBWTs7O0FBSVI7QUFDQTs2Q0FBUyxNQUFBLEFBQU0sTUFIWixBQUdrQixBQUNyQjt5REFBcUIsUUFKbEIsQUFJa0IsQUFBUSxBQUM3Qjs2Q0FBUyxRQUxOLEFBS00sQUFBUSxBQUNqQjtrREFBYyxRQU5YLEFBTVcsQUFBUSxBQUN0QjtvREFBZ0IsUUFQYixBQU9hLEFBQVEsQUFDeEI7NkNBQVMsUUFSTixBQVFNLEFBQVEsQTtBQVJkLEFBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFiZSxBLEFBb0czQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJzaG93LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkM6L0V0aGVyZXVtLUJsb2NrY2hhaW4vU21hcnRDb250cmFjdHMva2lja3N0YXJ0In0=

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "C:\\Ethereum-Blockchain\\SmartContracts\\kickstart\\pages\\campaigns\\show.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Ethereum-Blockchain\\SmartContracts\\kickstart\\pages\\campaigns\\show.js"); } } })();
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/campaigns\\show")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy5iYmJiYzljM2VhOTQ0Yjg2OWM2MC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvY2FtcGFpZ25zL3Nob3cuanM/YmFmNmU4ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2xheW91dCc7XHJcbmltcG9ydCBDYW1wYWlnbiBmcm9tICcuLi8uLi9ldGhlcmV1bS9jYW1wYWlnbic7XHJcbmltcG9ydCB7IENhcmQsIEdyaWQsIEJ1dHRvbiB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcclxuaW1wb3J0IHdlYjMgZnJvbSAnLi4vLi4vZXRoZXJldW0vd2ViMyc7XHJcbmltcG9ydCBDb250cmlidXRlRm9ybSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0NvbnRyaWJ1dGVGb3JtJztcclxuaW1wb3J0IHtMaW5rfSBmcm9tICcuLi8uLi9yb3V0ZXMnO1xyXG5cclxuY2xhc3MgQ2FtcGFpZ25TaG93IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICAvLyBwcm9wcyBoZXJlIGlzIGRpZmZlcmVudCB0aGFuIHRoZSBhY3R1YWwgY29tcG9uZW50IHByb3BzLlxyXG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhwcm9wcykge1xyXG4gICAgICAgIC8vIG5vdCBwYXJ0IG9mIGFjdHVhbCBpbnN0YW5jZS5cclxuICAgICAgICAvLyBhY3R1YWwgYWRkcmVzcyBvZiB0aGUgY2FtcGlnbiB3ZVxyXG4gICAgICAgIC8vIGFyZSB0cnlpbmcgdG8gc2hvdyB0byB1c2VyLlxyXG4gICAgICAgIGNvbnN0IGNhbXBhaWduID0gQ2FtcGFpZ24ocHJvcHMucXVlcnkuYWRkcmVzcyk7XHJcblxyXG4gICAgICAgIGNvbnN0IHN1bW1hcnkgPSBhd2FpdCAgY2FtcGFpZ24ubWV0aG9kcy5nZXRTdW1tYXJ5KCkuY2FsbCgpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKHN1bW1hcnkpO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAvLyBzbyB0aGF0IGl0IGNhbiBiZSBlYXN5IHRvIGFjY2VzcyB1c2luZzogXHJcbiAgICAgICAgICAgIC8vIHRoaXMucHJvcHMuIGFsbCB0aGUgYmVsb3cgb25lcyBzZXBlcmF0ZWx5LlxyXG4gICAgICAgICAgICBhZGRyZXNzOiBwcm9wcy5xdWVyeS5hZGRyZXNzLFxyXG4gICAgICAgICAgICBtaW5pbXVtQ29udHJpYnV0aW9uOiBzdW1tYXJ5WzBdLFxyXG4gICAgICAgICAgICBiYWxhbmNlOiBzdW1tYXJ5WzFdLFxyXG4gICAgICAgICAgICByZXF1ZXN0Q291bnQ6IHN1bW1hcnlbMl0sXHJcbiAgICAgICAgICAgIGFwcHJvdmVyc0NvdW50OiBzdW1tYXJ5WzNdLFxyXG4gICAgICAgICAgICBtYW5hZ2VyOiBzdW1tYXJ5WzRdXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJDYXJkcygpIHtcclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIGJhbGFuY2UsXHJcbiAgICAgICAgICAgIG1hbmFnZXIsXHJcbiAgICAgICAgICAgIG1pbmltdW1Db250cmlidXRpb24sXHJcbiAgICAgICAgICAgIHJlcXVlc3RDb3VudCxcclxuICAgICAgICAgICAgYXBwcm92ZXJzQ291bnRcclxuICAgICAgICB9ID0gdGhpcy5wcm9wcztcclxuXHJcblxyXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXI6bWFuYWdlcixcclxuICAgICAgICAgICAgICAgIG1ldGE6ICdBZGRyZXNzIG9mIE1hbmFnZXInLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdUaGUgbWFuYWdlciBjcmVhdGVkIHRoaXMgQ2FtcGFpZ24gYW5kIFxcXHJcbiAgICAgICAgICAgICAgICAgICAgY2FuIGNyZWF0ZSByZXF1ZXN0cyB0byB3aXRoZHJhdyBtb25leScsXHJcbiAgICAgICAgICAgICAgICBzdHlsZToge292ZXJmbG93V3JhcDogJ2JyZWFrLXdvcmQnfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXI6IG1pbmltdW1Db250cmlidXRpb24sXHJcbiAgICAgICAgICAgICAgICBtYXRhOiAnTWluaW11bSBDb250cmlidXRpb24gKHdlaSknLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdZb3UgbXVzdCBjb250cmlidXRlIGF0IGxlYXN0IHRoaXMgbXVjaCBcXFxyXG4gICAgICAgICAgICAgICAgICAgIHdlaSB0byBiZWNvbWUgYW4gYXBwcm92ZXInXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGhlYWRlcjogcmVxdWVzdENvdW50LFxyXG4gICAgICAgICAgICAgICAgbWV0YTogJ051bWJlciBvZiBSZXF1ZXN0cycsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0EgcmVxdWVzdCB0cmllcyB0byB3aXRoZHJhdyBtb25leSBmcm9tIHRoZSBjb250cmFjdC5cXFxyXG4gICAgICAgICAgICAgICAgICAgIFJlcXVlc3QgbXVzdCBiZSBhcHByb3ZlZCBieSBhcHByb3ZlcnMuJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXI6IGFwcHJvdmVyc0NvdW50LFxyXG4gICAgICAgICAgICAgICAgbWV0YTogJ051bWJlciBvZiBBcHByb3ZlcnMnLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdBIG9mIHBlb3BsZSB3aG8gaGF2ZSBhbHJlYWR5IGRvbmF0ZWQgdG8gdGhlIGNhbXBhaWduLidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyOiB3ZWIzLnV0aWxzLmZyb21XZWkoYmFsYW5jZSwgJ2V0aGVyJyksXHJcbiAgICAgICAgICAgICAgICBtZXRhOiAnQ2FtcGFpZ24gQmFsYW5jZSAoZXRoZXIpJyxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnVGhlIGJhbGFuY2UgaXMgaG93IG11Y2ggbW9uZXkgdGhpcyBjYW1wYWlnbiBoYXMgbGVmdCB0byBzcGVuZC4nXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgcmV0dXJuIDxDYXJkLkdyb3VwIGl0ZW1zPXtpdGVtc30gLz47XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxoMz5DYW1wYWlnbiBTaG93PC9oMz5cclxuICAgICAgICAgICAgPEdyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZC5Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXsxMH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlckNhcmRzKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRyaWJ1dGVGb3JtIGFkZHJlc3MgPSB7dGhpcy5wcm9wcy5hZGRyZXNzfT48L0NvbnRyaWJ1dGVGb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQuUm93PlxyXG4gICAgICAgICAgICAgICAgPEdyaWQuUm93PlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayByb3V0ZSA9IHtgL2NhbXBhaWducy8ke3RoaXMucHJvcHMuYWRkcmVzc30vcmVxdWVzdHNgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gcHJpbWFyeT5WaWV3IFJlcXVlc3Q8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkLlJvdz5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FtcGFpZ25TaG93O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL2NhbXBhaWducy9zaG93LmpzP2VudHJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJBO0FBT0E7QUFMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUdBO0FBQ0E7QUFFQTs7QUFBQTtBQUpBO0FBUUE7QUFDQTtBQUFBOztBQUZBO0FBT0E7QUFDQTtBQUFBOztBQUZBO0FBT0E7QUFDQTtBQUFBO0FBRkE7QUFLQTtBQUVBO0FBS0E7QUFQQTtBQUNBO0FBTUE7QUFBQTtBQUNBO0FBREE7QUFBQTs7OztBQUlBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFHQTtBQUhBO0FBR0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQVFBOzs7QUE5RkE7QUFDQTs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOztBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNGQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9