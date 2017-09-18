var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import { combineReducers } from 'redux';

export default class ReducerRegistry {
    constructor(rootReducer) {
        this._registry = _extends({}, rootReducer);
    }

    add(name, reducer) {
        this._registry[name] = reducer;
    }

    getRegistry() {
        return _extends({}, this._registry);
    }

    getCombinedRegistry() {
        return combineReducers(_extends({}, this._registry));
    }
}