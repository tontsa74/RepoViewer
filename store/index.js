import { createStore, applyMiddleware } from 'redux';
import allReducers from './reducers';
import thunk from 'redux-thunk';
import { AsyncStorage } from 'react-native';
import { persistStore, persistReducer } from 'redux-persist';

/** Thunk middleware extends store abilities for async logic */
const middleware = applyMiddleware(thunk);

/** Persist configuration */
const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['search', 'repos', 'branches', 'commits'],
};

/** Persist reducer contains all reducers */
const persistedReducer = persistReducer(persistConfig, allReducers);

/** Create redux store including reducers and middlewares */
const store = createStore(persistedReducer, middleware);

/** Persistor for ability to save store */
const persistor = persistStore(store);

/** Console logs all store changes */
/* store.subscribe(() => {
    console.log('store changed: ', store.getState());
}); */

export { store, persistor };
