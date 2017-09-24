[![Build Status](https://travis-ci.org/PhilippeRoy/redux-async-reducer.svg?branch=master)](https://travis-ci.org/PhilippeRoy/redux-async-reducer)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

# redux-async-reducer
Dynamically add reducers in Redux

```javascript
store.addReducer(name, reducer)
```

In applications that use [code spliting](https://webpack.js.org/guides/code-splitting/), the [PRPL](https://developers.google.com/web/fundamentals/performance/prpl-pattern/) pattern or the like would benefit from having the ability to add reducers dynamically.

`redux-async-reducer` adds a thin wrapper around `createStore` from Redux. This wrapper provides the same functionality as `createStore` but with additional helper methods such as `addReducer`. See below for examples and the full API.


## How to use

`npm i -S redux-async-reducer`

Replace `createStore` from Redux with `createStore` from redux-async-reducer

```diff
+ import { createStore } from 'redux-async-reducer';
- import { createStore } from 'redux';
```

That's it.

You can now use `createStore` as you normally would*. 

## *Note
 `createStore` by `redux-aysnc-reducer` expects a reducer object (the same object that you would pass to `combineReducers`). It must be provided a reducer with a key and not just a reducer function.

## Examples

Example 1. (Create store)
```javascript
import { createStore } from 'redux-async-reducer';

const rootReducerObj = {
    root: (state = {}, action) => state
} 

const store = creatStore(rootReducerObj)
```

Example 2. (Add reducer)
```javascript
import { createStore } from 'redux-async-reducer';

const rootReducerObj = {
    root: (state = {}, action) => state
} 

const store = creatStore(rootReducerObj)

store.addReducer('foo', (state = {}, action) => state)
```

Example 3. (Get reducers)
```javascript
import { createStore } from 'redux-async-reducer';

const rootReducerObj = {
    root: (state = {}, action) => state
} 

const store = creatStore(rootReducerObj)

store.addReducer('foo', (state = {}, action) => state)

store.getReducers()
/* 
    {
        root: (state = {}, action) => state
        foo: (state = {}, action) => state
    }
*/

```

## API

```javascript
// Same as redux createStore but epects reducer object
createStore(reducerObj, [preloadedState], [enhancer])

// Method. Expects 2 parameters. 1. String 2. Function(reducer)
addReducer(name, reducer)

// Method. no Parameters. Returns object of reducers
getReducers()
```

## Motivation

Traditionally in Redux apps all reducers are known when bootstrapping the application. This is fine in small sized apps but when applying code splitting, lazy-loading or something along those lines, Redux out of the box does not make it intuitive to add reducers dynamically. Dan Abramov has provided rough a solution on [SO](https://stackoverflow.com/questions/32968016/how-to-dynamically-load-reducers-for-code-splitting-in-a-redux-application) to address this. 

While his solution works, it is not a full answer as he states. `redux-async-reducer` applies a similar technique but in a more intuitive manner. The store itself provides a method `addReducer` and keeps track of what reducers have been added. Using  `redux-async-reducer` is as simple calling:

```javascript
store.addReducer(name, reducer)
```

## TODO
* Add Typescript
* Add moar tests

## License

MIT
