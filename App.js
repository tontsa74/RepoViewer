import React, { useState, useEffect } from 'react';
import AppNavigator from './AppNavigator';
import { Provider } from 'react-redux';
import { store, persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import Welcome from './screens/Welcome/Welcome';

/**
 * RepoViewer App
 *
 * Contains react-redux store including redux persistor and react-navigation systems
 *
 */
export default function App() {
    const [welcome, setWelcome] = useState(true);

    /** Set welcome screen timeout */
    useEffect(() => {
        if (welcome) {
            setTimeout(() => {
                setWelcome(false);
            }, 1500);
        }
    });

    return (
        <Provider store={store}>
            <PersistGate
                loading={<Welcome loading={true} />}
                persistor={persistor}>
                {welcome ? <Welcome loading={false} /> : <AppNavigator />}
            </PersistGate>
        </Provider>
    );
}
