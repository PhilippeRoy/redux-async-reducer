//import { combineReducers } from 'redux'
import ReducerRegistry from '../../src/reducerRegistry'

test('Expect \'r\' to be an instance of ReducerRegistry', ()=>{
    const r = new ReducerRegistry()
    expect(r).toBeInstanceOf(ReducerRegistry)    
})

test('Expect method .getRegistry to return this._registry', ()=>{
    const mockReducer = {reducer:state=>state}
    const r = new ReducerRegistry(mockReducer)
    expect(r.getRegistry()).toEqual(mockReducer)
})

// test('Expect method .getCombinedRegistry to return a combineReducers(this._registry)', ()=>{
//     const mockReducer = {reducer:state=>state}
//     const mockCombinedReducer = combineReducers(mockReducer) 
//     const r = new ReducerRegistry(mockReducer)
//     expect(r.getCombinedRegistry()).toEqual(mockCombinedReducer) 
// })

test('Expect method .add to add a reducer to this._registry', ()=>{
    const name = 'reducer'
    const reducer = state=>state
    const r = new ReducerRegistry()
    r.add(name,reducer)
    expect(r.getRegistry()).toHaveProperty(name)    
})

test('Expect an Error when passed anything but a reducer object', ()=>{})
test('Expect an Warning when passed arguments other than type string & fn to .add', ()=>{})
