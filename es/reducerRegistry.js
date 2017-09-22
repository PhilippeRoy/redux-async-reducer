'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _redux = require('redux');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ReducerRegistry = function () {
    function ReducerRegistry(rootReducer) {
        _classCallCheck(this, ReducerRegistry);

        this._registry = _extends({}, rootReducer);
    }

    _createClass(ReducerRegistry, [{
        key: 'add',
        value: function add(name, reducer) {
            this._registry[name] = reducer;
        }
    }, {
        key: 'getRegistry',
        value: function getRegistry() {
            return _extends({}, this._registry);
        }
    }, {
        key: 'getCombinedRegistry',
        value: function getCombinedRegistry() {
            return (0, _redux.combineReducers)(_extends({}, this._registry));
        }
    }]);

    return ReducerRegistry;
}();

exports.default = ReducerRegistry;