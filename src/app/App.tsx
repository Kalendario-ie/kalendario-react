import React from 'react';
import AppIntl from './AppIntl';
import AppRoutes from './AppRoutes';
import AppNavbar from './modules/core/navbar/app-navbar';


function App() {
    return (
        <AppIntl language={'en'}>
            <AppNavbar/>
            <AppRoutes/>
        </AppIntl>
    );
}

export default App;
