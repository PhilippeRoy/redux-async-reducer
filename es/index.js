'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.createStore = createStore;

var _redux = require('redux');

var _reducerRegistry = require('./reducerRegistry');

var _reducerRegistry2 = _interopRequireDefault(_reducerRegistry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createStore(reducer, preloadedState, enhancer) {

    // Reducer must be an object
    //TODO: throw error if not an object

    var reducerRegistry = new _reducerRegistry2.default(reducer);

    var store = (0, _redux.createStore)(reducerRegistry.getCombinedRegistry(), preloadedState, enhancer);

    return _extends({}, store, {
        addReducer: function addReducer(name, reducer) {
            reducerRegistry.add(name, reducer);
            return store.replaceReducer(reducerRegistry.getCombinedRegistry());
        },
        getReducers: function getReducers() {
            return reducerRegistry.getRegistry();
        },
        getCombinedReducers: function getCombinedReducers() {
            return reducerRegistry.getCombinedRegistry();
        }
    });
}