import React from 'react';
import AppRoutes from './AppRoutes';
import AppIntl from './AppIntl';


function App() {
    return (
        <AppIntl language={'en'}>
            <AppRoutes/>
        </AppIntl>
    );
}

export default App;
