import { combineReducers } from 'redux'

export default class ReducerRegistry {
    constructor(rootReducer){
        this._registry = {...rootReducer}
    }

    add(name, reducer) {
        this._registry[name] = reducer     
    }

    getRegistry() {
        return {...this._registry}
    }

    getCombinedRegistry() {
        return combineReducers({...this._registry})
    }
}