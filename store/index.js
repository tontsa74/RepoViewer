import { createStore, applyMiddleware } from 'redux';
import allReducers from './reducers';
import thunk from 'redux-thunk';
import { AsyncStorage } from 'react-native';
import { persistStore, persistReducer } from 'redux-persist';

const middleware = applyMiddleware(thunk);

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['search'],
};

const persistedReducer = persistReducer(persistConfig, allReducers);

const store = createStore(persistedReducer, middleware);

const persistor = persistStore(store);

store.subscribe(() => {
    console.log('store changed: ', store.getState());
});

export { store, persistor };
