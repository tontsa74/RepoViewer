import { createStore } from 'redux';
import allReducers from './reducers';

const store = createStore(allReducers);

store.subscribe(() => {
    console.log('store changed: ', store.getState());
});

export { store };
