import { createStore, applyMiddleware } from 'redux';
import allReducers from './reducers';
import thunk from 'redux-thunk';

const middleware = applyMiddleware(thunk);

const store = createStore(allReducers, middleware);

store.subscribe(() => {
    console.log('store changed: ', store.getState());
});

export { store };
