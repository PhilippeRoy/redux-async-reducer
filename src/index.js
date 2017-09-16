import { createStore as reduxCreateStore } from 'redux'
import ReducerRegistry from './reducerRegistry'


export function createStore(reducer, preloadedState, enhancer) {

    // Reducer must be an object
    //TODO: throw error if not an object

    const reducerRegistry = new ReducerRegistry(reducer)

    const store = reduxCreateStore(reducerRegistry.getCombinedRegistry(), preloadedState, enhancer)

    return {
        ...store,
        addReducer: (name, reducer) => {
            reducerRegistry.add(name, reducer)
            return store.replaceReducer(reducerRegistry.getCombinedRegistry())
        },
        getReducers: ()=>reducerRegistry.getRegistry(),
        getCombinedReducers: ()=>reducerRegistry.getCombinedRegistry()
    }
}