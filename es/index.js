var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import { createStore as reduxCreateStore } from 'redux';
import ReducerRegistry from './reducerRegistry';

export function createStore(reducer, preloadedState, enhancer) {

    // Reducer must be an object
    //TODO: throw error if not an object

    const reducerRegistry = new ReducerRegistry(reducer);

    const store = reduxCreateStore(reducerRegistry.getCombinedRegistry(), preloadedState, enhancer);

    return _extends({}, store, {
        addReducer: (name, reducer) => {
            reducerRegistry.add(name, reducer);
            return store.replaceReducer(reducerRegistry.getCombinedRegistry());
        },
        getReducers: () => reducerRegistry.getRegistry(),
        getCombinedReducers: () => reducerRegistry.getCombinedRegistry()
    });
}